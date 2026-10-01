"use client";
import {collection,doc,getDoc,onSnapshot,setDoc,updateDoc} from "firebase/firestore";
import type {Unsubscribe} from "firebase/firestore";
import {db} from "@/lib/firebase/client";
export const ENQUIRY_STATUSES=["New","Contacted","Assessment Scheduled","Quote / Follow-up","Closed"] as const;
export type EnquiryStatus=typeof ENQUIRY_STATUSES[number];
export type Enquiry={id:string;createdAt:string;name:string;phone:string;problem:string;preferredContact:"whatsapp"|"phone";location:string;notes:string;status:EnquiryStatus};
export type BusinessSettings={id:string;serviceText:string;phone:string;whatsapp:string;location:string;hours:string;locationNote:string;updatedAt:string};
const enquiriesCollection=collection(db,"enquiries");const settingsDoc=doc(db,"businessSettings","main");
export function createEnquiry(data:Omit<Enquiry,"id">){const reference=doc(enquiriesCollection);return{id:reference.id,writePromise:setDoc(reference,data)}}
export function subscribeToEnquiry(id:string,onChange:(item:Enquiry|null)=>void,onError:(error:Error)=>void):Unsubscribe{return onSnapshot(doc(enquiriesCollection,id),snapshot=>onChange(snapshot.exists()?{id:snapshot.id,...snapshot.data() as Omit<Enquiry,"id">}:null),error=>onError(error instanceof Error?error:new Error("Enquiry updates unavailable.")))}
export function subscribeToEnquiries(onChange:(items:Enquiry[],fromCache:boolean)=>void,onError:(error:Error)=>void):Unsubscribe{return onSnapshot(enquiriesCollection,{includeMetadataChanges:true},snapshot=>onChange(snapshot.docs.map(item=>({id:item.id,...item.data() as Omit<Enquiry,"id">})).sort((a,b)=>b.createdAt.localeCompare(a.createdAt)),snapshot.metadata.fromCache),error=>onError(error instanceof Error?error:new Error("Enquiry queue unavailable.")))}
export async function updateEnquiryStatus(id:string,status:EnquiryStatus){await updateDoc(doc(enquiriesCollection,id),{status})}
export async function getBusinessSettings():Promise<BusinessSettings|null>{const snapshot=await getDoc(settingsDoc);return snapshot.exists()?{id:snapshot.id,...snapshot.data() as Omit<BusinessSettings,"id">}:null}
export async function saveBusinessSettings(settings:BusinessSettings){await setDoc(settingsDoc,settings,{merge:true})}
