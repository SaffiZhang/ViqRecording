/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateCaseInput = {
  id?: string | null;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string;
  note?: string | null;
  birthdayOfInterviewee?: string | null;
  interviewType?: string | null;
  interviewAccess?: string | null;
  theOtherPersonsPresent?: string | null;
};

export type UpdateCaseInput = {
  id: string;
  interviewee?: string | null;
  interviewFinish?: string | null;
  interviewStart?: string | null;
  officerCollarNumber?: string | null;
  location?: string | null;
  unitId?: string | null;
  path?: string | null;
  note?: string | null;
  birthdayOfInterviewee?: string | null;
  interviewType?: string | null;
  interviewAccess?: string | null;
  theOtherPersonsPresent?: string | null;
};

export type DeleteCaseInput = {
  id?: string | null;
};

export type CreateRecordingInput = {
  id?: string | null;
  url: string;
  bucket: string;
  key: string;
  description: string;
  camera: string;
  version: string;
  recordingCaseId?: string | null;
};

export type UpdateRecordingInput = {
  id: string;
  url?: string | null;
  bucket?: string | null;
  key?: string | null;
  lastmodified?: string | null;
  description?: string | null;
  camera?: string | null;
  version?: string | null;
  recordingCaseId?: string | null;
};

export type DeleteRecordingInput = {
  id?: string | null;
};

export type CreateAttachmentInput = {
  id?: string | null;
  description: string;
  url: string;
  updatedDateTime: string;
  updatedBy: string;
  attachmentCaseId?: string | null;
};

export type UpdateAttachmentInput = {
  id: string;
  description?: string | null;
  url?: string | null;
  updatedDateTime?: string | null;
  updatedBy?: string | null;
  attachmentCaseId?: string | null;
};

export type DeleteAttachmentInput = {
  id?: string | null;
};

export type CreateBookmarkInput = {
  id?: string | null;
  order: number;
  dateTime: string;
  speaker?: string | null;
  content: string;
  updatedDateTime?: string | null;
  updatedBy?: string | null;
  bookmarkCaseId?: string | null;
};

export type UpdateBookmarkInput = {
  id: string;
  order?: number | null;
  dateTime?: string | null;
  speaker?: string | null;
  content?: string | null;
  updatedDateTime?: string | null;
  updatedBy?: string | null;
  bookmarkCaseId?: string | null;
};

export type DeleteBookmarkInput = {
  id?: string | null;
};

export type CreateRedactionInput = {
  id?: string | null;
  redactionVersion: string;
  description: string;
  updatedDateTime?: string | null;
  updatedBy?: string | null;
  status: string;
  redactionRecordingId?: string | null;
};

export type UpdateRedactionInput = {
  id: string;
  redactionVersion?: string | null;
  description?: string | null;
  updatedDateTime?: string | null;
  updatedBy?: string | null;
  status?: string | null;
  redactionRecordingId?: string | null;
};

export type DeleteRedactionInput = {
  id?: string | null;
};

export type CreateRedactionIntervalInput = {
  id?: string | null;
  redactionVersion: string;
  startSecond: number;
  endSecond: number;
  type: string;
  redactionIntervalRedactonId?: string | null;
};

export type UpdateRedactionIntervalInput = {
  id: string;
  redactionVersion?: string | null;
  startSecond?: number | null;
  endSecond?: number | null;
  type?: string | null;
  redactionIntervalRedactonId?: string | null;
};

export type DeleteRedactionIntervalInput = {
  id?: string | null;
};

export type CreateSharedInput = {
  id?: string | null;
  createdDateTime: string;
  createdBy: string;
  receiver: string;
  receiver_email: string;
  receiver_type: string;
  expiry_date: string;
  token: string;
  urls: Array<string | null>;
  status: string;
  description: string;
  sharedCaseId?: string | null;
};

export type UpdateSharedInput = {
  id: string;
  createdDateTime?: string | null;
  createdBy?: string | null;
  receiver?: string | null;
  receiver_email?: string | null;
  receiver_type?: string | null;
  expiry_date?: string | null;
  token?: string | null;
  urls?: Array<string | null> | null;
  status?: string | null;
  description?: string | null;
  sharedCaseId?: string | null;
};

export type DeleteSharedInput = {
  id?: string | null;
};

export type CreateTranscriptionInput = {
  id?: string | null;
  submitTime: string;
  transcriptionFileUrl: string;
  status: string;
  transcriptionCaseId?: string | null;
};

export type UpdateTranscriptionInput = {
  id: string;
  submitTime?: string | null;
  transcriptionFileUrl?: string | null;
  status?: string | null;
  transcriptionCaseId?: string | null;
};

export type DeleteTranscriptionInput = {
  id?: string | null;
};

export type CreateLogInput = {
  id?: string | null;
  dateTime: string;
  description: string;
  userName: string;
  recordId: string;
  tableName: string;
  logCaseId?: string | null;
};

export type UpdateLogInput = {
  id: string;
  dateTime?: string | null;
  description?: string | null;
  userName?: string | null;
  recordId?: string | null;
  tableName?: string | null;
  logCaseId?: string | null;
};

export type DeleteLogInput = {
  id?: string | null;
};

export type ModelCaseFilterInput = {
  id?: ModelStringFilterInput | null;
  interviewee?: ModelStringFilterInput | null;
  interviewFinish?: ModelStringFilterInput | null;
  interviewStart?: ModelStringFilterInput | null;
  officerCollarNumber?: ModelStringFilterInput | null;
  location?: ModelStringFilterInput | null;
  unitId?: ModelStringFilterInput | null;
  path?: ModelStringFilterInput | null;
  note?: ModelStringFilterInput | null;
  birthdayOfInterviewee?: ModelStringFilterInput | null;
  interviewType?: ModelStringFilterInput | null;
  interviewAccess?: ModelStringFilterInput | null;
  theOtherPersonsPresent?: ModelStringFilterInput | null;
  and?: Array<ModelCaseFilterInput | null> | null;
  or?: Array<ModelCaseFilterInput | null> | null;
  not?: ModelCaseFilterInput | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelRecordingFilterInput = {
  id?: ModelIDFilterInput | null;
  url?: ModelStringFilterInput | null;
  bucket?: ModelStringFilterInput | null;
  key?: ModelStringFilterInput | null;
  lastmodified?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  camera?: ModelStringFilterInput | null;
  version?: ModelStringFilterInput | null;
  recordingCaseId?:ModelStringFilterInput | null;
  and?: Array<ModelRecordingFilterInput | null> | null;
  or?: Array<ModelRecordingFilterInput | null> | null;
  not?: ModelRecordingFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelAttachmentFilterInput = {
  id?: ModelIDFilterInput | null;
  description?: ModelStringFilterInput | null;
  url?: ModelStringFilterInput | null;
  updatedDateTime?: ModelStringFilterInput | null;
  updatedBy?: ModelStringFilterInput | null;
  attachmentCaseId?:ModelStringFilterInput | null;
  and?: Array<ModelAttachmentFilterInput | null> | null;
  or?: Array<ModelAttachmentFilterInput | null> | null;
  not?: ModelAttachmentFilterInput | null;
};

export type ModelBookmarkFilterInput = {
  id?: ModelIDFilterInput | null;
  order?: ModelIntFilterInput | null;
  dateTime?: ModelStringFilterInput | null;
  speaker?: ModelStringFilterInput | null;
  content?: ModelStringFilterInput | null;
  updatedDateTime?: ModelStringFilterInput | null;
  updatedBy?: ModelStringFilterInput | null;
  bookmarkCaseId?:ModelStringFilterInput | null;
  and?: Array<ModelBookmarkFilterInput | null> | null;
  or?: Array<ModelBookmarkFilterInput | null> | null;
  not?: ModelBookmarkFilterInput | null;
};

export type ModelIntFilterInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  contains?: number | null;
  notContains?: number | null;
  between?: Array<number | null> | null;
};

export type ModelRedactionFilterInput = {
  id?: ModelIDFilterInput | null;
  redactionVersion?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  updatedDateTime?: ModelStringFilterInput | null;
  updatedBy?: ModelStringFilterInput | null;
  status?: ModelStringFilterInput | null;
  redactionRecordingId?:ModelStringFilterInput | null;
  and?: Array<ModelRedactionFilterInput | null> | null;
  or?: Array<ModelRedactionFilterInput | null> | null;
  not?: ModelRedactionFilterInput | null;
};

export type ModelRedactionIntervalFilterInput = {
  id?: ModelIDFilterInput | null;
  redactionVersion?: ModelStringFilterInput | null;
  startSecond?: ModelIntFilterInput | null;
  endSecond?: ModelIntFilterInput | null;
  type?: ModelStringFilterInput | null;
  redactionIntervalRedactionId?:ModelStringFilterInput | null;
  and?: Array<ModelRedactionIntervalFilterInput | null> | null;
  or?: Array<ModelRedactionIntervalFilterInput | null> | null;
  not?: ModelRedactionIntervalFilterInput | null;
};

export type ModelSharedFilterInput = {
  id?: ModelIDFilterInput | null;
  createdDateTime?: ModelStringFilterInput | null;
  createdBy?: ModelStringFilterInput | null;
  receiver?: ModelStringFilterInput | null;
  receiver_email?: ModelStringFilterInput | null;
  receiver_type?: ModelStringFilterInput | null;
  expiry_date?: ModelStringFilterInput | null;
  token?: ModelStringFilterInput | null;
  urls?: ModelStringFilterInput | null;
  status?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  sharedCaseId?:ModelStringFilterInput | null;
  and?: Array<ModelSharedFilterInput | null> | null;
  or?: Array<ModelSharedFilterInput | null> | null;
  not?: ModelSharedFilterInput | null;
};

export type ModelTranscriptionFilterInput = {
  id?: ModelIDFilterInput | null;
  submitTime?: ModelStringFilterInput | null;
  transcriptionFileUrl?: ModelStringFilterInput | null;
  status?: ModelStringFilterInput | null;
  transcriptionCaseId?:ModelStringFilterInput | null;
  and?: Array<ModelTranscriptionFilterInput | null> | null;
  or?: Array<ModelTranscriptionFilterInput | null> | null;
  not?: ModelTranscriptionFilterInput | null;
};

export type ModelLogFilterInput = {
  id?: ModelIDFilterInput | null;
  dateTime?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  userName?: ModelStringFilterInput | null;
  recordId?: ModelStringFilterInput | null;
  tableName?: ModelStringFilterInput | null;
  logCaseId?:ModelStringFilterInput | null;
  and?: Array<ModelLogFilterInput | null> | null;
  or?: Array<ModelLogFilterInput | null> | null;
  not?: ModelLogFilterInput | null;
};

export type CreateCaseMutation = {
  __typename: "Case";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string;
  note: string | null;
  birthdayOfInterviewee: string | null;
  interviewType: string | null;
  interviewAccess: string | null;
  theOtherPersonsPresent: string | null;
  attachments: {
    __typename: "ModelAttachmentConnection";
    items: Array<{
      __typename: "Attachment";
      id: string;
      description: string;
      url: string;
      updatedDateTime: string;
      updatedBy: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recordings: {
    __typename: "ModelRecordingConnection";
    items: Array<{
      __typename: "Recording";
      id: string;
      url: string;
      bucket: string;
      key: string;
      description: string;
      camera: string;
      version: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  logs: {
    __typename: "ModelLogConnection";
    items: Array<{
      __typename: "Log";
      id: string;
      dateTime: string;
      description: string;
      userName: string;
      recordId: string;
      tableName: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transcriptions: {
    __typename: "ModelTranscriptionConnection";
    items: Array<{
      __typename: "Transcription";
      id: string;
      submitTime: string;
      transcriptionFileUrl: string;
      status: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  bookmarks: {
    __typename: "ModelBookmarkConnection";
    items: Array<{
      __typename: "Bookmark";
      id: string;
      order: number;
      dateTime: string;
      speaker: string | null;
      content: string;
      updatedDateTime: string | null;
      updatedBy: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shareds: {
    __typename: "ModelSharedConnection";
    items: Array<{
      __typename: "Shared";
      id: string;
      createdDateTime: string;
      createdBy: string;
      receiver: string;
      receiver_email: string;
      receiver_type: string;
      expiry_date: string;
      token: string;
      urls: Array<string | null>;
      status: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateCaseMutation = {
  __typename: "Case";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string;
  note: string | null;
  birthdayOfInterviewee: string | null;
  interviewType: string | null;
  interviewAccess: string | null;
  theOtherPersonsPresent: string | null;
  attachments: {
    __typename: "ModelAttachmentConnection";
    items: Array<{
      __typename: "Attachment";
      id: string;
      description: string;
      url: string;
      updatedDateTime: string;
      updatedBy: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recordings: {
    __typename: "ModelRecordingConnection";
    items: Array<{
      __typename: "Recording";
      id: string;
      url: string;
      bucket: string;
      key: string;
      description: string;
      camera: string;
      version: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  logs: {
    __typename: "ModelLogConnection";
    items: Array<{
      __typename: "Log";
      id: string;
      dateTime: string;
      description: string;
      userName: string;
      recordId: string;
      tableName: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transcriptions: {
    __typename: "ModelTranscriptionConnection";
    items: Array<{
      __typename: "Transcription";
      id: string;
      submitTime: string;
      transcriptionFileUrl: string;
      status: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  bookmarks: {
    __typename: "ModelBookmarkConnection";
    items: Array<{
      __typename: "Bookmark";
      id: string;
      order: number;
      dateTime: string;
      speaker: string | null;
      content: string;
      updatedDateTime: string | null;
      updatedBy: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shareds: {
    __typename: "ModelSharedConnection";
    items: Array<{
      __typename: "Shared";
      id: string;
      createdDateTime: string;
      createdBy: string;
      receiver: string;
      receiver_email: string;
      receiver_type: string;
      expiry_date: string;
      token: string;
      urls: Array<string | null>;
      status: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteCaseMutation = {
  __typename: "Case";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string;
  note: string | null;
  birthdayOfInterviewee: string | null;
  interviewType: string | null;
  interviewAccess: string | null;
  theOtherPersonsPresent: string | null;
  attachments: {
    __typename: "ModelAttachmentConnection";
    items: Array<{
      __typename: "Attachment";
      id: string;
      description: string;
      url: string;
      updatedDateTime: string;
      updatedBy: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recordings: {
    __typename: "ModelRecordingConnection";
    items: Array<{
      __typename: "Recording";
      id: string;
      url: string;
      bucket: string;
      key: string;
      description: string;
      camera: string;
      version: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  logs: {
    __typename: "ModelLogConnection";
    items: Array<{
      __typename: "Log";
      id: string;
      dateTime: string;
      description: string;
      userName: string;
      recordId: string;
      tableName: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transcriptions: {
    __typename: "ModelTranscriptionConnection";
    items: Array<{
      __typename: "Transcription";
      id: string;
      submitTime: string;
      transcriptionFileUrl: string;
      status: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  bookmarks: {
    __typename: "ModelBookmarkConnection";
    items: Array<{
      __typename: "Bookmark";
      id: string;
      order: number;
      dateTime: string;
      speaker: string | null;
      content: string;
      updatedDateTime: string | null;
      updatedBy: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shareds: {
    __typename: "ModelSharedConnection";
    items: Array<{
      __typename: "Shared";
      id: string;
      createdDateTime: string;
      createdBy: string;
      receiver: string;
      receiver_email: string;
      receiver_type: string;
      expiry_date: string;
      token: string;
      urls: Array<string | null>;
      status: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateRecordingMutation = {
  __typename: "Recording";
  id: string;
  url: string;
  bucket: string;
  key: string;
  description: string;
  camera: string;
  version: string;
  redactions: {
    __typename: "ModelRedactionConnection";
    items: Array<{
      __typename: "Redaction";
      id: string;
      redactionVersion: string;
      description: string;
      updatedDateTime: string | null;
      updatedBy: string | null;
      status: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateRecordingMutation = {
  __typename: "Recording";
  id: string;
  url: string;
  bucket: string;
  key: string;
  description: string;
  camera: string;
  version: string;
  redactions: {
    __typename: "ModelRedactionConnection";
    items: Array<{
      __typename: "Redaction";
      id: string;
      redactionVersion: string;
      description: string;
      updatedDateTime: string | null;
      updatedBy: string | null;
      status: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteRecordingMutation = {
  __typename: "Recording";
  id: string;
  url: string;
  bucket: string;
  key: string;
  description: string;
  camera: string;
  version: string;
  redactions: {
    __typename: "ModelRedactionConnection";
    items: Array<{
      __typename: "Redaction";
      id: string;
      redactionVersion: string;
      description: string;
      updatedDateTime: string | null;
      updatedBy: string | null;
      status: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateAttachmentMutation = {
  __typename: "Attachment";
  id: string;
  description: string;
  url: string;
  updatedDateTime: string;
  updatedBy: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateAttachmentMutation = {
  __typename: "Attachment";
  id: string;
  description: string;
  url: string;
  updatedDateTime: string;
  updatedBy: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteAttachmentMutation = {
  __typename: "Attachment";
  id: string;
  description: string;
  url: string;
  updatedDateTime: string;
  updatedBy: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateBookmarkMutation = {
  __typename: "Bookmark";
  id: string;
  order: number;
  dateTime: string;
  speaker: string | null;
  content: string;
  updatedDateTime: string | null;
  updatedBy: string | null;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateBookmarkMutation = {
  __typename: "Bookmark";
  id: string;
  order: number;
  dateTime: string;
  speaker: string | null;
  content: string;
  updatedDateTime: string | null;
  updatedBy: string | null;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteBookmarkMutation = {
  __typename: "Bookmark";
  id: string;
  order: number;
  dateTime: string;
  speaker: string | null;
  content: string;
  updatedDateTime: string | null;
  updatedBy: string | null;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateRedactionMutation = {
  __typename: "Redaction";
  id: string;
  redactionVersion: string;
  description: string;
  updatedDateTime: string | null;
  updatedBy: string | null;
  status: string;
  recording: {
    __typename: "Recording";
    id: string;
    url: string;
    bucket: string;
    key: string;
    description: string;
    camera: string;
    version: string;
    redactions: {
      __typename: "ModelRedactionConnection";
      nextToken: string | null;
    } | null;
    case: {
      __typename: "Case";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      note: string | null;
      birthdayOfInterviewee: string | null;
      interviewType: string | null;
      interviewAccess: string | null;
      theOtherPersonsPresent: string | null;
    } | null;
  } | null;
  RedactionIntervals: {
    __typename: "ModelRedactionIntervalConnection";
    items: Array<{
      __typename: "RedactionInterval";
      id: string;
      redactionVersion: string;
      startSecond: number;
      endSecond: number;
      type: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateRedactionMutation = {
  __typename: "Redaction";
  id: string;
  redactionVersion: string;
  description: string;
  updatedDateTime: string | null;
  updatedBy: string | null;
  status: string;
  recording: {
    __typename: "Recording";
    id: string;
    url: string;
    bucket: string;
    key: string;
    description: string;
    camera: string;
    version: string;
    redactions: {
      __typename: "ModelRedactionConnection";
      nextToken: string | null;
    } | null;
    case: {
      __typename: "Case";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      note: string | null;
      birthdayOfInterviewee: string | null;
      interviewType: string | null;
      interviewAccess: string | null;
      theOtherPersonsPresent: string | null;
    } | null;
  } | null;
  RedactionIntervals: {
    __typename: "ModelRedactionIntervalConnection";
    items: Array<{
      __typename: "RedactionInterval";
      id: string;
      redactionVersion: string;
      startSecond: number;
      endSecond: number;
      type: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteRedactionMutation = {
  __typename: "Redaction";
  id: string;
  redactionVersion: string;
  description: string;
  updatedDateTime: string | null;
  updatedBy: string | null;
  status: string;
  recording: {
    __typename: "Recording";
    id: string;
    url: string;
    bucket: string;
    key: string;
    description: string;
    camera: string;
    version: string;
    redactions: {
      __typename: "ModelRedactionConnection";
      nextToken: string | null;
    } | null;
    case: {
      __typename: "Case";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      note: string | null;
      birthdayOfInterviewee: string | null;
      interviewType: string | null;
      interviewAccess: string | null;
      theOtherPersonsPresent: string | null;
    } | null;
  } | null;
  RedactionIntervals: {
    __typename: "ModelRedactionIntervalConnection";
    items: Array<{
      __typename: "RedactionInterval";
      id: string;
      redactionVersion: string;
      startSecond: number;
      endSecond: number;
      type: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateRedactionIntervalMutation = {
  __typename: "RedactionInterval";
  id: string;
  redactionVersion: string;
  startSecond: number;
  endSecond: number;
  type: string;
  redacton: {
    __typename: "Redaction";
    id: string;
    redactionVersion: string;
    description: string;
    updatedDateTime: string | null;
    updatedBy: string | null;
    status: string;
    recording: {
      __typename: "Recording";
      id: string;
      url: string;
      bucket: string;
      key: string;
      description: string;
      camera: string;
      version: string;
    } | null;
    RedactionIntervals: {
      __typename: "ModelRedactionIntervalConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateRedactionIntervalMutation = {
  __typename: "RedactionInterval";
  id: string;
  redactionVersion: string;
  startSecond: number;
  endSecond: number;
  type: string;
  redacton: {
    __typename: "Redaction";
    id: string;
    redactionVersion: string;
    description: string;
    updatedDateTime: string | null;
    updatedBy: string | null;
    status: string;
    recording: {
      __typename: "Recording";
      id: string;
      url: string;
      bucket: string;
      key: string;
      description: string;
      camera: string;
      version: string;
    } | null;
    RedactionIntervals: {
      __typename: "ModelRedactionIntervalConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteRedactionIntervalMutation = {
  __typename: "RedactionInterval";
  id: string;
  redactionVersion: string;
  startSecond: number;
  endSecond: number;
  type: string;
  redacton: {
    __typename: "Redaction";
    id: string;
    redactionVersion: string;
    description: string;
    updatedDateTime: string | null;
    updatedBy: string | null;
    status: string;
    recording: {
      __typename: "Recording";
      id: string;
      url: string;
      bucket: string;
      key: string;
      description: string;
      camera: string;
      version: string;
    } | null;
    RedactionIntervals: {
      __typename: "ModelRedactionIntervalConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateSharedMutation = {
  __typename: "Shared";
  id: string;
  createdDateTime: string;
  createdBy: string;
  receiver: string;
  receiver_email: string;
  receiver_type: string;
  expiry_date: string;
  token: string;
  urls: Array<string | null>;
  status: string;
  description: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateSharedMutation = {
  __typename: "Shared";
  id: string;
  createdDateTime: string;
  createdBy: string;
  receiver: string;
  receiver_email: string;
  receiver_type: string;
  expiry_date: string;
  token: string;
  urls: Array<string | null>;
  status: string;
  description: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteSharedMutation = {
  __typename: "Shared";
  id: string;
  createdDateTime: string;
  createdBy: string;
  receiver: string;
  receiver_email: string;
  receiver_type: string;
  expiry_date: string;
  token: string;
  urls: Array<string | null>;
  status: string;
  description: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateTranscriptionMutation = {
  __typename: "Transcription";
  id: string;
  submitTime: string;
  transcriptionFileUrl: string;
  status: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateTranscriptionMutation = {
  __typename: "Transcription";
  id: string;
  submitTime: string;
  transcriptionFileUrl: string;
  status: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteTranscriptionMutation = {
  __typename: "Transcription";
  id: string;
  submitTime: string;
  transcriptionFileUrl: string;
  status: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateLogMutation = {
  __typename: "Log";
  id: string;
  dateTime: string;
  description: string;
  userName: string;
  recordId: string;
  tableName: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateLogMutation = {
  __typename: "Log";
  id: string;
  dateTime: string;
  description: string;
  userName: string;
  recordId: string;
  tableName: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteLogMutation = {
  __typename: "Log";
  id: string;
  dateTime: string;
  description: string;
  userName: string;
  recordId: string;
  tableName: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type GetCaseQuery = {
  __typename: "Case";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string;
  note: string | null;
  birthdayOfInterviewee: string | null;
  interviewType: string | null;
  interviewAccess: string | null;
  theOtherPersonsPresent: string | null;
  attachments: {
    __typename: "ModelAttachmentConnection";
    items: Array<{
      __typename: "Attachment";
      id: string;
      description: string;
      url: string;
      updatedDateTime: string;
      updatedBy: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recordings: {
    __typename: "ModelRecordingConnection";
    items: Array<{
      __typename: "Recording";
      id: string;
      url: string;
      bucket: string;
      key: string;
      description: string;
      camera: string;
      version: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  logs: {
    __typename: "ModelLogConnection";
    items: Array<{
      __typename: "Log";
      id: string;
      dateTime: string;
      description: string;
      userName: string;
      recordId: string;
      tableName: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transcriptions: {
    __typename: "ModelTranscriptionConnection";
    items: Array<{
      __typename: "Transcription";
      id: string;
      submitTime: string;
      transcriptionFileUrl: string;
      status: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  bookmarks: {
    __typename: "ModelBookmarkConnection";
    items: Array<{
      __typename: "Bookmark";
      id: string;
      order: number;
      dateTime: string;
      speaker: string | null;
      content: string;
      updatedDateTime: string | null;
      updatedBy: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shareds: {
    __typename: "ModelSharedConnection";
    items: Array<{
      __typename: "Shared";
      id: string;
      createdDateTime: string;
      createdBy: string;
      receiver: string;
      receiver_email: string;
      receiver_type: string;
      expiry_date: string;
      token: string;
      urls: Array<string | null>;
      status: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListCasesQuery = {
  __typename: "ModelCaseConnection";
  items: Array<{
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetRecordingQuery = {
  __typename: "Recording";
  id: string;
  url: string;
  bucket: string;
  key: string;
  description: string;
  camera: string;
  version: string;
  redactions: {
    __typename: "ModelRedactionConnection";
    items: Array<{
      __typename: "Redaction";
      id: string;
      redactionVersion: string;
      description: string;
      updatedDateTime: string | null;
      updatedBy: string | null;
      status: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListRecordingsQuery = {
  __typename: "ModelRecordingConnection";
  items: Array<{
    __typename: "Recording";
    id: string;
    url: string;
    bucket: string;
    key: string;
    description: string;
    camera: string;
    version: string;
    redactions: {
      __typename: "ModelRedactionConnection";
      nextToken: string | null;
    } | null;
    case: {
      __typename: "Case";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      note: string | null;
      birthdayOfInterviewee: string | null;
      interviewType: string | null;
      interviewAccess: string | null;
      theOtherPersonsPresent: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetAttachmentQuery = {
  __typename: "Attachment";
  id: string;
  description: string;
  url: string;
  updatedDateTime: string;
  updatedBy: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListAttachmentsQuery = {
  __typename: "ModelAttachmentConnection";
  items: Array<{
    __typename: "Attachment";
    id: string;
    description: string;
    url: string;
    updatedDateTime: string;
    updatedBy: string;
    case: {
      __typename: "Case";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      note: string | null;
      birthdayOfInterviewee: string | null;
      interviewType: string | null;
      interviewAccess: string | null;
      theOtherPersonsPresent: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetBookmarkQuery = {
  __typename: "Bookmark";
  id: string;
  order: number;
  dateTime: string;
  speaker: string | null;
  content: string;
  updatedDateTime: string | null;
  updatedBy: string | null;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListBookmarksQuery = {
  __typename: "ModelBookmarkConnection";
  items: Array<{
    __typename: "Bookmark";
    id: string;
    order: number;
    dateTime: string;
    speaker: string | null;
    content: string;
    updatedDateTime: string | null;
    updatedBy: string | null;
    case: {
      __typename: "Case";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      note: string | null;
      birthdayOfInterviewee: string | null;
      interviewType: string | null;
      interviewAccess: string | null;
      theOtherPersonsPresent: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetRedactionQuery = {
  __typename: "Redaction";
  id: string;
  redactionVersion: string;
  description: string;
  updatedDateTime: string | null;
  updatedBy: string | null;
  status: string;
  recording: {
    __typename: "Recording";
    id: string;
    url: string;
    bucket: string;
    key: string;
    description: string;
    camera: string;
    version: string;
    redactions: {
      __typename: "ModelRedactionConnection";
      nextToken: string | null;
    } | null;
    case: {
      __typename: "Case";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      note: string | null;
      birthdayOfInterviewee: string | null;
      interviewType: string | null;
      interviewAccess: string | null;
      theOtherPersonsPresent: string | null;
    } | null;
  } | null;
  RedactionIntervals: {
    __typename: "ModelRedactionIntervalConnection";
    items: Array<{
      __typename: "RedactionInterval";
      id: string;
      redactionVersion: string;
      startSecond: number;
      endSecond: number;
      type: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListRedactionsQuery = {
  __typename: "ModelRedactionConnection";
  items: Array<{
    __typename: "Redaction";
    id: string;
    redactionVersion: string;
    description: string;
    updatedDateTime: string | null;
    updatedBy: string | null;
    status: string;
    recording: {
      __typename: "Recording";
      id: string;
      url: string;
      bucket: string;
      key: string;
      description: string;
      camera: string;
      version: string;
    } | null;
    RedactionIntervals: {
      __typename: "ModelRedactionIntervalConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetRedactionIntervalQuery = {
  __typename: "RedactionInterval";
  id: string;
  redactionVersion: string;
  startSecond: number;
  endSecond: number;
  type: string;
  redacton: {
    __typename: "Redaction";
    id: string;
    redactionVersion: string;
    description: string;
    updatedDateTime: string | null;
    updatedBy: string | null;
    status: string;
    recording: {
      __typename: "Recording";
      id: string;
      url: string;
      bucket: string;
      key: string;
      description: string;
      camera: string;
      version: string;
    } | null;
    RedactionIntervals: {
      __typename: "ModelRedactionIntervalConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListRedactionIntervalsQuery = {
  __typename: "ModelRedactionIntervalConnection";
  items: Array<{
    __typename: "RedactionInterval";
    id: string;
    redactionVersion: string;
    startSecond: number;
    endSecond: number;
    type: string;
    redacton: {
      __typename: "Redaction";
      id: string;
      redactionVersion: string;
      description: string;
      updatedDateTime: string | null;
      updatedBy: string | null;
      status: string;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetSharedQuery = {
  __typename: "Shared";
  id: string;
  createdDateTime: string;
  createdBy: string;
  receiver: string;
  receiver_email: string;
  receiver_type: string;
  expiry_date: string;
  token: string;
  urls: Array<string | null>;
  status: string;
  description: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListSharedsQuery = {
  __typename: "ModelSharedConnection";
  items: Array<{
    __typename: "Shared";
    id: string;
    createdDateTime: string;
    createdBy: string;
    receiver: string;
    receiver_email: string;
    receiver_type: string;
    expiry_date: string;
    token: string;
    urls: Array<string | null>;
    status: string;
    description: string;
    case: {
      __typename: "Case";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      note: string | null;
      birthdayOfInterviewee: string | null;
      interviewType: string | null;
      interviewAccess: string | null;
      theOtherPersonsPresent: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetTranscriptionQuery = {
  __typename: "Transcription";
  id: string;
  submitTime: string;
  transcriptionFileUrl: string;
  status: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListTranscriptionsQuery = {
  __typename: "ModelTranscriptionConnection";
  items: Array<{
    __typename: "Transcription";
    id: string;
    submitTime: string;
    transcriptionFileUrl: string;
    status: string;
    case: {
      __typename: "Case";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      note: string | null;
      birthdayOfInterviewee: string | null;
      interviewType: string | null;
      interviewAccess: string | null;
      theOtherPersonsPresent: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetLogQuery = {
  __typename: "Log";
  id: string;
  dateTime: string;
  description: string;
  userName: string;
  recordId: string;
  tableName: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListLogsQuery = {
  __typename: "ModelLogConnection";
  items: Array<{
    __typename: "Log";
    id: string;
    dateTime: string;
    description: string;
    userName: string;
    recordId: string;
    tableName: string;
    case: {
      __typename: "Case";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      note: string | null;
      birthdayOfInterviewee: string | null;
      interviewType: string | null;
      interviewAccess: string | null;
      theOtherPersonsPresent: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateCaseSubscription = {
  __typename: "Case";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string;
  note: string | null;
  birthdayOfInterviewee: string | null;
  interviewType: string | null;
  interviewAccess: string | null;
  theOtherPersonsPresent: string | null;
  attachments: {
    __typename: "ModelAttachmentConnection";
    items: Array<{
      __typename: "Attachment";
      id: string;
      description: string;
      url: string;
      updatedDateTime: string;
      updatedBy: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recordings: {
    __typename: "ModelRecordingConnection";
    items: Array<{
      __typename: "Recording";
      id: string;
      url: string;
      bucket: string;
      key: string;
      description: string;
      camera: string;
      version: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  logs: {
    __typename: "ModelLogConnection";
    items: Array<{
      __typename: "Log";
      id: string;
      dateTime: string;
      description: string;
      userName: string;
      recordId: string;
      tableName: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transcriptions: {
    __typename: "ModelTranscriptionConnection";
    items: Array<{
      __typename: "Transcription";
      id: string;
      submitTime: string;
      transcriptionFileUrl: string;
      status: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  bookmarks: {
    __typename: "ModelBookmarkConnection";
    items: Array<{
      __typename: "Bookmark";
      id: string;
      order: number;
      dateTime: string;
      speaker: string | null;
      content: string;
      updatedDateTime: string | null;
      updatedBy: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shareds: {
    __typename: "ModelSharedConnection";
    items: Array<{
      __typename: "Shared";
      id: string;
      createdDateTime: string;
      createdBy: string;
      receiver: string;
      receiver_email: string;
      receiver_type: string;
      expiry_date: string;
      token: string;
      urls: Array<string | null>;
      status: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateCaseSubscription = {
  __typename: "Case";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string;
  note: string | null;
  birthdayOfInterviewee: string | null;
  interviewType: string | null;
  interviewAccess: string | null;
  theOtherPersonsPresent: string | null;
  attachments: {
    __typename: "ModelAttachmentConnection";
    items: Array<{
      __typename: "Attachment";
      id: string;
      description: string;
      url: string;
      updatedDateTime: string;
      updatedBy: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recordings: {
    __typename: "ModelRecordingConnection";
    items: Array<{
      __typename: "Recording";
      id: string;
      url: string;
      bucket: string;
      key: string;
      description: string;
      camera: string;
      version: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  logs: {
    __typename: "ModelLogConnection";
    items: Array<{
      __typename: "Log";
      id: string;
      dateTime: string;
      description: string;
      userName: string;
      recordId: string;
      tableName: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transcriptions: {
    __typename: "ModelTranscriptionConnection";
    items: Array<{
      __typename: "Transcription";
      id: string;
      submitTime: string;
      transcriptionFileUrl: string;
      status: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  bookmarks: {
    __typename: "ModelBookmarkConnection";
    items: Array<{
      __typename: "Bookmark";
      id: string;
      order: number;
      dateTime: string;
      speaker: string | null;
      content: string;
      updatedDateTime: string | null;
      updatedBy: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shareds: {
    __typename: "ModelSharedConnection";
    items: Array<{
      __typename: "Shared";
      id: string;
      createdDateTime: string;
      createdBy: string;
      receiver: string;
      receiver_email: string;
      receiver_type: string;
      expiry_date: string;
      token: string;
      urls: Array<string | null>;
      status: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteCaseSubscription = {
  __typename: "Case";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string;
  note: string | null;
  birthdayOfInterviewee: string | null;
  interviewType: string | null;
  interviewAccess: string | null;
  theOtherPersonsPresent: string | null;
  attachments: {
    __typename: "ModelAttachmentConnection";
    items: Array<{
      __typename: "Attachment";
      id: string;
      description: string;
      url: string;
      updatedDateTime: string;
      updatedBy: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recordings: {
    __typename: "ModelRecordingConnection";
    items: Array<{
      __typename: "Recording";
      id: string;
      url: string;
      bucket: string;
      key: string;
      description: string;
      camera: string;
      version: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  logs: {
    __typename: "ModelLogConnection";
    items: Array<{
      __typename: "Log";
      id: string;
      dateTime: string;
      description: string;
      userName: string;
      recordId: string;
      tableName: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transcriptions: {
    __typename: "ModelTranscriptionConnection";
    items: Array<{
      __typename: "Transcription";
      id: string;
      submitTime: string;
      transcriptionFileUrl: string;
      status: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  bookmarks: {
    __typename: "ModelBookmarkConnection";
    items: Array<{
      __typename: "Bookmark";
      id: string;
      order: number;
      dateTime: string;
      speaker: string | null;
      content: string;
      updatedDateTime: string | null;
      updatedBy: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  shareds: {
    __typename: "ModelSharedConnection";
    items: Array<{
      __typename: "Shared";
      id: string;
      createdDateTime: string;
      createdBy: string;
      receiver: string;
      receiver_email: string;
      receiver_type: string;
      expiry_date: string;
      token: string;
      urls: Array<string | null>;
      status: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateRecordingSubscription = {
  __typename: "Recording";
  id: string;
  url: string;
  bucket: string;
  key: string;
  description: string;
  camera: string;
  version: string;
  redactions: {
    __typename: "ModelRedactionConnection";
    items: Array<{
      __typename: "Redaction";
      id: string;
      redactionVersion: string;
      description: string;
      updatedDateTime: string | null;
      updatedBy: string | null;
      status: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateRecordingSubscription = {
  __typename: "Recording";
  id: string;
  url: string;
  bucket: string;
  key: string;
  description: string;
  camera: string;
  version: string;
  redactions: {
    __typename: "ModelRedactionConnection";
    items: Array<{
      __typename: "Redaction";
      id: string;
      redactionVersion: string;
      description: string;
      updatedDateTime: string | null;
      updatedBy: string | null;
      status: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteRecordingSubscription = {
  __typename: "Recording";
  id: string;
  url: string;
  bucket: string;
  key: string;
  description: string;
  camera: string;
  version: string;
  redactions: {
    __typename: "ModelRedactionConnection";
    items: Array<{
      __typename: "Redaction";
      id: string;
      redactionVersion: string;
      description: string;
      updatedDateTime: string | null;
      updatedBy: string | null;
      status: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateAttachmentSubscription = {
  __typename: "Attachment";
  id: string;
  description: string;
  url: string;
  updatedDateTime: string;
  updatedBy: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateAttachmentSubscription = {
  __typename: "Attachment";
  id: string;
  description: string;
  url: string;
  updatedDateTime: string;
  updatedBy: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteAttachmentSubscription = {
  __typename: "Attachment";
  id: string;
  description: string;
  url: string;
  updatedDateTime: string;
  updatedBy: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateBookmarkSubscription = {
  __typename: "Bookmark";
  id: string;
  order: number;
  dateTime: string;
  speaker: string | null;
  content: string;
  updatedDateTime: string | null;
  updatedBy: string | null;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateBookmarkSubscription = {
  __typename: "Bookmark";
  id: string;
  order: number;
  dateTime: string;
  speaker: string | null;
  content: string;
  updatedDateTime: string | null;
  updatedBy: string | null;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteBookmarkSubscription = {
  __typename: "Bookmark";
  id: string;
  order: number;
  dateTime: string;
  speaker: string | null;
  content: string;
  updatedDateTime: string | null;
  updatedBy: string | null;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateRedactionSubscription = {
  __typename: "Redaction";
  id: string;
  redactionVersion: string;
  description: string;
  updatedDateTime: string | null;
  updatedBy: string | null;
  status: string;
  recording: {
    __typename: "Recording";
    id: string;
    url: string;
    bucket: string;
    key: string;
    description: string;
    camera: string;
    version: string;
    redactions: {
      __typename: "ModelRedactionConnection";
      nextToken: string | null;
    } | null;
    case: {
      __typename: "Case";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      note: string | null;
      birthdayOfInterviewee: string | null;
      interviewType: string | null;
      interviewAccess: string | null;
      theOtherPersonsPresent: string | null;
    } | null;
  } | null;
  RedactionIntervals: {
    __typename: "ModelRedactionIntervalConnection";
    items: Array<{
      __typename: "RedactionInterval";
      id: string;
      redactionVersion: string;
      startSecond: number;
      endSecond: number;
      type: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateRedactionSubscription = {
  __typename: "Redaction";
  id: string;
  redactionVersion: string;
  description: string;
  updatedDateTime: string | null;
  updatedBy: string | null;
  status: string;
  recording: {
    __typename: "Recording";
    id: string;
    url: string;
    bucket: string;
    key: string;
    description: string;
    camera: string;
    version: string;
    redactions: {
      __typename: "ModelRedactionConnection";
      nextToken: string | null;
    } | null;
    case: {
      __typename: "Case";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      note: string | null;
      birthdayOfInterviewee: string | null;
      interviewType: string | null;
      interviewAccess: string | null;
      theOtherPersonsPresent: string | null;
    } | null;
  } | null;
  RedactionIntervals: {
    __typename: "ModelRedactionIntervalConnection";
    items: Array<{
      __typename: "RedactionInterval";
      id: string;
      redactionVersion: string;
      startSecond: number;
      endSecond: number;
      type: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteRedactionSubscription = {
  __typename: "Redaction";
  id: string;
  redactionVersion: string;
  description: string;
  updatedDateTime: string | null;
  updatedBy: string | null;
  status: string;
  recording: {
    __typename: "Recording";
    id: string;
    url: string;
    bucket: string;
    key: string;
    description: string;
    camera: string;
    version: string;
    redactions: {
      __typename: "ModelRedactionConnection";
      nextToken: string | null;
    } | null;
    case: {
      __typename: "Case";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      note: string | null;
      birthdayOfInterviewee: string | null;
      interviewType: string | null;
      interviewAccess: string | null;
      theOtherPersonsPresent: string | null;
    } | null;
  } | null;
  RedactionIntervals: {
    __typename: "ModelRedactionIntervalConnection";
    items: Array<{
      __typename: "RedactionInterval";
      id: string;
      redactionVersion: string;
      startSecond: number;
      endSecond: number;
      type: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateRedactionIntervalSubscription = {
  __typename: "RedactionInterval";
  id: string;
  redactionVersion: string;
  startSecond: number;
  endSecond: number;
  type: string;
  redacton: {
    __typename: "Redaction";
    id: string;
    redactionVersion: string;
    description: string;
    updatedDateTime: string | null;
    updatedBy: string | null;
    status: string;
    recording: {
      __typename: "Recording";
      id: string;
      url: string;
      bucket: string;
      key: string;
      description: string;
      camera: string;
      version: string;
    } | null;
    RedactionIntervals: {
      __typename: "ModelRedactionIntervalConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateRedactionIntervalSubscription = {
  __typename: "RedactionInterval";
  id: string;
  redactionVersion: string;
  startSecond: number;
  endSecond: number;
  type: string;
  redacton: {
    __typename: "Redaction";
    id: string;
    redactionVersion: string;
    description: string;
    updatedDateTime: string | null;
    updatedBy: string | null;
    status: string;
    recording: {
      __typename: "Recording";
      id: string;
      url: string;
      bucket: string;
      key: string;
      description: string;
      camera: string;
      version: string;
    } | null;
    RedactionIntervals: {
      __typename: "ModelRedactionIntervalConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteRedactionIntervalSubscription = {
  __typename: "RedactionInterval";
  id: string;
  redactionVersion: string;
  startSecond: number;
  endSecond: number;
  type: string;
  redacton: {
    __typename: "Redaction";
    id: string;
    redactionVersion: string;
    description: string;
    updatedDateTime: string | null;
    updatedBy: string | null;
    status: string;
    recording: {
      __typename: "Recording";
      id: string;
      url: string;
      bucket: string;
      key: string;
      description: string;
      camera: string;
      version: string;
    } | null;
    RedactionIntervals: {
      __typename: "ModelRedactionIntervalConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateSharedSubscription = {
  __typename: "Shared";
  id: string;
  createdDateTime: string;
  createdBy: string;
  receiver: string;
  receiver_email: string;
  receiver_type: string;
  expiry_date: string;
  token: string;
  urls: Array<string | null>;
  status: string;
  description: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateSharedSubscription = {
  __typename: "Shared";
  id: string;
  createdDateTime: string;
  createdBy: string;
  receiver: string;
  receiver_email: string;
  receiver_type: string;
  expiry_date: string;
  token: string;
  urls: Array<string | null>;
  status: string;
  description: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteSharedSubscription = {
  __typename: "Shared";
  id: string;
  createdDateTime: string;
  createdBy: string;
  receiver: string;
  receiver_email: string;
  receiver_type: string;
  expiry_date: string;
  token: string;
  urls: Array<string | null>;
  status: string;
  description: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateTranscriptionSubscription = {
  __typename: "Transcription";
  id: string;
  submitTime: string;
  transcriptionFileUrl: string;
  status: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateTranscriptionSubscription = {
  __typename: "Transcription";
  id: string;
  submitTime: string;
  transcriptionFileUrl: string;
  status: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteTranscriptionSubscription = {
  __typename: "Transcription";
  id: string;
  submitTime: string;
  transcriptionFileUrl: string;
  status: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateLogSubscription = {
  __typename: "Log";
  id: string;
  dateTime: string;
  description: string;
  userName: string;
  recordId: string;
  tableName: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateLogSubscription = {
  __typename: "Log";
  id: string;
  dateTime: string;
  description: string;
  userName: string;
  recordId: string;
  tableName: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteLogSubscription = {
  __typename: "Log";
  id: string;
  dateTime: string;
  description: string;
  userName: string;
  recordId: string;
  tableName: string;
  case: {
    __typename: "Case";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
    note: string | null;
    birthdayOfInterviewee: string | null;
    interviewType: string | null;
    interviewAccess: string | null;
    theOtherPersonsPresent: string | null;
    attachments: {
      __typename: "ModelAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordings: {
      __typename: "ModelRecordingConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelTranscriptionConnection";
      nextToken: string | null;
    } | null;
    bookmarks: {
      __typename: "ModelBookmarkConnection";
      nextToken: string | null;
    } | null;
    shareds: {
      __typename: "ModelSharedConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCase(input: CreateCaseInput): Promise<CreateCaseMutation> {
    const statement = `mutation CreateCase($input: CreateCaseInput!) {
        createCase(input: $input) {
          __typename
          id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          location
          unitId
          path
          note
          birthdayOfInterviewee
          interviewType
          interviewAccess
          theOtherPersonsPresent
          attachments {
            __typename
            items {
              __typename
              id
              description
              url
              updatedDateTime
              updatedBy
            }
            nextToken
          }
          recordings {
            __typename
            items {
              __typename
              id
              url
              bucket
              key
              lastmodified
              description
              camera
              version
            }
            nextToken
          }
          logs {
            __typename
            items {
              __typename
              id
              dateTime
              description
              userName
              recordId
              tableName
            }
            nextToken
          }
          transcriptions {
            __typename
            items {
              __typename
              id
              submitTime
              transcriptionFileUrl
              status
            }
            nextToken
          }
          bookmarks {
            __typename
            items {
              __typename
              id
              order
              dateTime
              speaker
              content
              updatedDateTime
              updatedBy
            }
            nextToken
          }
          shareds {
            __typename
            items {
              __typename
              id
              createdDateTime
              createdBy
              receiver
              receiver_email
              receiver_type
              expiry_date
              token
              urls
              status
              description
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCaseMutation>response.data.createCase;
  }
  async UpdateCase(input: UpdateCaseInput): Promise<UpdateCaseMutation> {
    const statement = `mutation UpdateCase($input: UpdateCaseInput!) {
        updateCase(input: $input) {
          __typename
          id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          location
          unitId
          path
          note
          birthdayOfInterviewee
          interviewType
          interviewAccess
          theOtherPersonsPresent
          attachments {
            __typename
            items {
              __typename
              id
              description
              url
              updatedDateTime
              updatedBy
            }
            nextToken
          }
          recordings {
            __typename
            items {
              __typename
              id
              url
              bucket
              key
              lastmodified
              description
              camera
              version
            }
            nextToken
          }
          logs {
            __typename
            items {
              __typename
              id
              dateTime
              description
              userName
              recordId
              tableName
            }
            nextToken
          }
          transcriptions {
            __typename
            items {
              __typename
              id
              submitTime
              transcriptionFileUrl
              status
            }
            nextToken
          }
          bookmarks {
            __typename
            items {
              __typename
              id
              order
              dateTime
              speaker
              content
              updatedDateTime
              updatedBy
            }
            nextToken
          }
          shareds {
            __typename
            items {
              __typename
              id
              createdDateTime
              createdBy
              receiver
              receiver_email
              receiver_type
              expiry_date
              token
              urls
              status
              description
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCaseMutation>response.data.updateCase;
  }
  async DeleteCase(input: DeleteCaseInput): Promise<DeleteCaseMutation> {
    const statement = `mutation DeleteCase($input: DeleteCaseInput!) {
        deleteCase(input: $input) {
          __typename
          id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          location
          unitId
          path
          note
          birthdayOfInterviewee
          interviewType
          interviewAccess
          theOtherPersonsPresent
          attachments {
            __typename
            items {
              __typename
              id
              description
              url
              updatedDateTime
              updatedBy
            }
            nextToken
          }
          recordings {
            __typename
            items {
              __typename
              id
              url
              bucket
              key
              lastmodified
              description
              camera
              version
            }
            nextToken
          }
          logs {
            __typename
            items {
              __typename
              id
              dateTime
              description
              userName
              recordId
              tableName
            }
            nextToken
          }
          transcriptions {
            __typename
            items {
              __typename
              id
              submitTime
              transcriptionFileUrl
              status
            }
            nextToken
          }
          bookmarks {
            __typename
            items {
              __typename
              id
              order
              dateTime
              speaker
              content
              updatedDateTime
              updatedBy
            }
            nextToken
          }
          shareds {
            __typename
            items {
              __typename
              id
              createdDateTime
              createdBy
              receiver
              receiver_email
              receiver_type
              expiry_date
              token
              urls
              status
              description
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCaseMutation>response.data.deleteCase;
  }
  async CreateRecording(
    input: CreateRecordingInput
  ): Promise<CreateRecordingMutation> {
    const statement = `mutation CreateRecording($input: CreateRecordingInput!) {
        createRecording(input: $input) {
          __typename
          id
          url
          bucket
          key
          lastmodified
          description
          camera
          version
          redactions {
            __typename
            items {
              __typename
              id
              redactionVersion
              description
              updatedDateTime
              updatedBy
              status
            }
            nextToken
          }
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRecordingMutation>response.data.createRecording;
  }
  async UpdateRecording(
    input: UpdateRecordingInput
  ): Promise<UpdateRecordingMutation> {
    const statement = `mutation UpdateRecording($input: UpdateRecordingInput!) {
        updateRecording(input: $input) {
          __typename
          id
          url
          bucket
          key
          lastmodified
          description
          camera
          version
          redactions {
            __typename
            items {
              __typename
              id
              redactionVersion
              description
              updatedDateTime
              updatedBy
              status
            }
            nextToken
          }
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRecordingMutation>response.data.updateRecording;
  }
  async DeleteRecording(
    input: DeleteRecordingInput
  ): Promise<DeleteRecordingMutation> {
    const statement = `mutation DeleteRecording($input: DeleteRecordingInput!) {
        deleteRecording(input: $input) {
          __typename
          id
          url
          bucket
          key
          lastmodified
          description
          camera
          version
          redactions {
            __typename
            items {
              __typename
              id
              redactionVersion
              description
              updatedDateTime
              updatedBy
              status
            }
            nextToken
          }
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRecordingMutation>response.data.deleteRecording;
  }
  async CreateAttachment(
    input: CreateAttachmentInput
  ): Promise<CreateAttachmentMutation> {
    const statement = `mutation CreateAttachment($input: CreateAttachmentInput!) {
        createAttachment(input: $input) {
          __typename
          id
          description
          url
          updatedDateTime
          updatedBy
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAttachmentMutation>response.data.createAttachment;
  }
  async UpdateAttachment(
    input: UpdateAttachmentInput
  ): Promise<UpdateAttachmentMutation> {
    const statement = `mutation UpdateAttachment($input: UpdateAttachmentInput!) {
        updateAttachment(input: $input) {
          __typename
          id
          description
          url
          updatedDateTime
          updatedBy
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAttachmentMutation>response.data.updateAttachment;
  }
  async DeleteAttachment(
    input: DeleteAttachmentInput
  ): Promise<DeleteAttachmentMutation> {
    const statement = `mutation DeleteAttachment($input: DeleteAttachmentInput!) {
        deleteAttachment(input: $input) {
          __typename
          id
          description
          url
          updatedDateTime
          updatedBy
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAttachmentMutation>response.data.deleteAttachment;
  }
  async CreateBookmark(
    input: CreateBookmarkInput
  ): Promise<CreateBookmarkMutation> {
    const statement = `mutation CreateBookmark($input: CreateBookmarkInput!) {
        createBookmark(input: $input) {
          __typename
          id
          order
          dateTime
          speaker
          content
          updatedDateTime
          updatedBy
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBookmarkMutation>response.data.createBookmark;
  }
  async UpdateBookmark(
    input: UpdateBookmarkInput
  ): Promise<UpdateBookmarkMutation> {
    const statement = `mutation UpdateBookmark($input: UpdateBookmarkInput!) {
        updateBookmark(input: $input) {
          __typename
          id
          order
          dateTime
          speaker
          content
          updatedDateTime
          updatedBy
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBookmarkMutation>response.data.updateBookmark;
  }
  async DeleteBookmark(
    input: DeleteBookmarkInput
  ): Promise<DeleteBookmarkMutation> {
    const statement = `mutation DeleteBookmark($input: DeleteBookmarkInput!) {
        deleteBookmark(input: $input) {
          __typename
          id
          order
          dateTime
          speaker
          content
          updatedDateTime
          updatedBy
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBookmarkMutation>response.data.deleteBookmark;
  }
  async CreateRedaction(
    input: CreateRedactionInput
  ): Promise<CreateRedactionMutation> {
    const statement = `mutation CreateRedaction($input: CreateRedactionInput!) {
        createRedaction(input: $input) {
          __typename
          id
          redactionVersion
          description
          updatedDateTime
          updatedBy
          status
          recording {
            __typename
            id
            url
            bucket
            key
            lastmodified
            description
            camera
            version
            redactions {
              __typename
              nextToken
            }
            case {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              note
              birthdayOfInterviewee
              interviewType
              interviewAccess
              theOtherPersonsPresent
            }
          }
          RedactionIntervals {
            __typename
            items {
              __typename
              id
              redactionVersion
              startSecond
              endSecond
              type
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRedactionMutation>response.data.createRedaction;
  }
  async UpdateRedaction(
    input: UpdateRedactionInput
  ): Promise<UpdateRedactionMutation> {
    const statement = `mutation UpdateRedaction($input: UpdateRedactionInput!) {
        updateRedaction(input: $input) {
          __typename
          id
          redactionVersion
          description
          updatedDateTime
          updatedBy
          status
          recording {
            __typename
            id
            url
            bucket
            key
            lastmodified
            description
            camera
            version
            redactions {
              __typename
              nextToken
            }
            case {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              note
              birthdayOfInterviewee
              interviewType
              interviewAccess
              theOtherPersonsPresent
            }
          }
          RedactionIntervals {
            __typename
            items {
              __typename
              id
              redactionVersion
              startSecond
              endSecond
              type
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRedactionMutation>response.data.updateRedaction;
  }
  async DeleteRedaction(
    input: DeleteRedactionInput
  ): Promise<DeleteRedactionMutation> {
    const statement = `mutation DeleteRedaction($input: DeleteRedactionInput!) {
        deleteRedaction(input: $input) {
          __typename
          id
          redactionVersion
          description
          updatedDateTime
          updatedBy
          status
          recording {
            __typename
            id
            url
            bucket
            key
            lastmodified
            description
            camera
            version
            redactions {
              __typename
              nextToken
            }
            case {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              note
              birthdayOfInterviewee
              interviewType
              interviewAccess
              theOtherPersonsPresent
            }
          }
          RedactionIntervals {
            __typename
            items {
              __typename
              id
              redactionVersion
              startSecond
              endSecond
              type
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRedactionMutation>response.data.deleteRedaction;
  }
  async CreateRedactionInterval(
    input: CreateRedactionIntervalInput
  ): Promise<CreateRedactionIntervalMutation> {
    const statement = `mutation CreateRedactionInterval($input: CreateRedactionIntervalInput!) {
        createRedactionInterval(input: $input) {
          __typename
          id
          redactionVersion
          startSecond
          endSecond
          type
          redacton {
            __typename
            id
            redactionVersion
            description
            updatedDateTime
            updatedBy
            status
            recording {
              __typename
              id
              url
              bucket
              key
              lastmodified
              description
              camera
              version
            }
            RedactionIntervals {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRedactionIntervalMutation>(
      response.data.createRedactionInterval
    );
  }
  async UpdateRedactionInterval(
    input: UpdateRedactionIntervalInput
  ): Promise<UpdateRedactionIntervalMutation> {
    const statement = `mutation UpdateRedactionInterval($input: UpdateRedactionIntervalInput!) {
        updateRedactionInterval(input: $input) {
          __typename
          id
          redactionVersion
          startSecond
          endSecond
          type
          redacton {
            __typename
            id
            redactionVersion
            description
            updatedDateTime
            updatedBy
            status
            recording {
              __typename
              id
              url
              bucket
              key
              lastmodified
              description
              camera
              version
            }
            RedactionIntervals {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRedactionIntervalMutation>(
      response.data.updateRedactionInterval
    );
  }
  async DeleteRedactionInterval(
    input: DeleteRedactionIntervalInput
  ): Promise<DeleteRedactionIntervalMutation> {
    const statement = `mutation DeleteRedactionInterval($input: DeleteRedactionIntervalInput!) {
        deleteRedactionInterval(input: $input) {
          __typename
          id
          redactionVersion
          startSecond
          endSecond
          type
          redacton {
            __typename
            id
            redactionVersion
            description
            updatedDateTime
            updatedBy
            status
            recording {
              __typename
              id
              url
              bucket
              key
              lastmodified
              description
              camera
              version
            }
            RedactionIntervals {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRedactionIntervalMutation>(
      response.data.deleteRedactionInterval
    );
  }
  async CreateShared(input: CreateSharedInput): Promise<CreateSharedMutation> {
    const statement = `mutation CreateShared($input: CreateSharedInput!) {
        createShared(input: $input) {
          __typename
          id
          createdDateTime
          createdBy
          receiver
          receiver_email
          receiver_type
          expiry_date
          token
          urls
          status
          description
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSharedMutation>response.data.createShared;
  }
  async UpdateShared(input: UpdateSharedInput): Promise<UpdateSharedMutation> {
    const statement = `mutation UpdateShared($input: UpdateSharedInput!) {
        updateShared(input: $input) {
          __typename
          id
          createdDateTime
          createdBy
          receiver
          receiver_email
          receiver_type
          expiry_date
          token
          urls
          status
          description
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSharedMutation>response.data.updateShared;
  }
  async DeleteShared(input: DeleteSharedInput): Promise<DeleteSharedMutation> {
    const statement = `mutation DeleteShared($input: DeleteSharedInput!) {
        deleteShared(input: $input) {
          __typename
          id
          createdDateTime
          createdBy
          receiver
          receiver_email
          receiver_type
          expiry_date
          token
          urls
          status
          description
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSharedMutation>response.data.deleteShared;
  }
  async CreateTranscription(
    input: CreateTranscriptionInput
  ): Promise<CreateTranscriptionMutation> {
    const statement = `mutation CreateTranscription($input: CreateTranscriptionInput!) {
        createTranscription(input: $input) {
          __typename
          id
          submitTime
          transcriptionFileUrl
          status
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTranscriptionMutation>response.data.createTranscription;
  }
  async UpdateTranscription(
    input: UpdateTranscriptionInput
  ): Promise<UpdateTranscriptionMutation> {
    const statement = `mutation UpdateTranscription($input: UpdateTranscriptionInput!) {
        updateTranscription(input: $input) {
          __typename
          id
          submitTime
          transcriptionFileUrl
          status
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTranscriptionMutation>response.data.updateTranscription;
  }
  async DeleteTranscription(
    input: DeleteTranscriptionInput
  ): Promise<DeleteTranscriptionMutation> {
    const statement = `mutation DeleteTranscription($input: DeleteTranscriptionInput!) {
        deleteTranscription(input: $input) {
          __typename
          id
          submitTime
          transcriptionFileUrl
          status
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTranscriptionMutation>response.data.deleteTranscription;
  }
  async CreateLog(input: CreateLogInput): Promise<CreateLogMutation> {
    const statement = `mutation CreateLog($input: CreateLogInput!) {
        createLog(input: $input) {
          __typename
          id
          dateTime
          description
          userName
          recordId
          tableName
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateLogMutation>response.data.createLog;
  }
  async UpdateLog(input: UpdateLogInput): Promise<UpdateLogMutation> {
    const statement = `mutation UpdateLog($input: UpdateLogInput!) {
        updateLog(input: $input) {
          __typename
          id
          dateTime
          description
          userName
          recordId
          tableName
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateLogMutation>response.data.updateLog;
  }
  async DeleteLog(input: DeleteLogInput): Promise<DeleteLogMutation> {
    const statement = `mutation DeleteLog($input: DeleteLogInput!) {
        deleteLog(input: $input) {
          __typename
          id
          dateTime
          description
          userName
          recordId
          tableName
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteLogMutation>response.data.deleteLog;
  }
  async GetCase(id: string): Promise<GetCaseQuery> {
    const statement = `query GetCase($id: ID!) {
        getCase(id: $id) {
          __typename
          id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          location
          unitId
          path
          note
          birthdayOfInterviewee
          interviewType
          interviewAccess
          theOtherPersonsPresent
          attachments {
            __typename
            items {
              __typename
              id
              description
              url
              updatedDateTime
              updatedBy
            }
            nextToken
          }
          recordings {
            __typename
            items {
              __typename
              id
              url
              bucket
              key
              lastmodified
              description
              camera
              version
            }
            nextToken
          }
          logs {
            __typename
            items {
              __typename
              id
              dateTime
              description
              userName
              recordId
              tableName
            }
            nextToken
          }
          transcriptions {
            __typename
            items {
              __typename
              id
              submitTime
              transcriptionFileUrl
              status
            }
            nextToken
          }
          bookmarks {
            __typename
            items {
              __typename
              id
              order
              dateTime
              speaker
              content
              updatedDateTime
              updatedBy
            }
            nextToken
          }
          shareds {
            __typename
            items {
              __typename
              id
              createdDateTime
              createdBy
              receiver
              receiver_email
              receiver_type
              expiry_date
              token
              urls
              status
              description
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCaseQuery>response.data.getCase;
  }
  async ListCases(
    filter?: ModelCaseFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCasesQuery> {
    const statement = `query ListCases($filter: ModelCaseFilterInput, $limit: Int, $nextToken: String) {
        listCases(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCasesQuery>response.data.listCases;
  }
  async GetRecording(id: string): Promise<GetRecordingQuery> {
    const statement = `query GetRecording($id: ID!) {
        getRecording(id: $id) {
          __typename
          id
          url
          bucket
          key
          lastmodified
          description
          camera
          version
          redactions {
            __typename
            items {
              __typename
              id
              redactionVersion
              description
              updatedDateTime
              updatedBy
              status
            }
            nextToken
          }
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRecordingQuery>response.data.getRecording;
  }
  async ListRecordings(
    filter?: ModelRecordingFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRecordingsQuery> {
    const statement = `query ListRecordings($filter: ModelRecordingFilterInput, $limit: Int, $nextToken: String) {
        listRecordings(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            url
            bucket
            key
            lastmodified
            description
            camera
            version
            redactions {
              __typename
              nextToken
            }
            case {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              note
              birthdayOfInterviewee
              interviewType
              interviewAccess
              theOtherPersonsPresent
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRecordingsQuery>response.data.listRecordings;
  }
  async GetAttachment(id: string): Promise<GetAttachmentQuery> {
    const statement = `query GetAttachment($id: ID!) {
        getAttachment(id: $id) {
          __typename
          id
          description
          url
          updatedDateTime
          updatedBy
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAttachmentQuery>response.data.getAttachment;
  }
  async ListAttachments(
    filter?: ModelAttachmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAttachmentsQuery> {
    const statement = `query ListAttachments($filter: ModelAttachmentFilterInput, $limit: Int, $nextToken: String) {
        listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            description
            url
            updatedDateTime
            updatedBy
            case {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              note
              birthdayOfInterviewee
              interviewType
              interviewAccess
              theOtherPersonsPresent
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAttachmentsQuery>response.data.listAttachments;
  }
  async GetBookmark(id: string): Promise<GetBookmarkQuery> {
    const statement = `query GetBookmark($id: ID!) {
        getBookmark(id: $id) {
          __typename
          id
          order
          dateTime
          speaker
          content
          updatedDateTime
          updatedBy
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBookmarkQuery>response.data.getBookmark;
  }
  async ListBookmarks(
    filter?: ModelBookmarkFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBookmarksQuery> {
    const statement = `query ListBookmarks($filter: ModelBookmarkFilterInput, $limit: Int, $nextToken: String) {
        listBookmarks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            order
            dateTime
            speaker
            content
            updatedDateTime
            updatedBy
            case {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              note
              birthdayOfInterviewee
              interviewType
              interviewAccess
              theOtherPersonsPresent
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBookmarksQuery>response.data.listBookmarks;
  }
  async GetRedaction(id: string): Promise<GetRedactionQuery> {
    const statement = `query GetRedaction($id: ID!) {
        getRedaction(id: $id) {
          __typename
          id
          redactionVersion
          description
          updatedDateTime
          updatedBy
          status
          recording {
            __typename
            id
            url
            bucket
            key
            lastmodified
            description
            camera
            version
            redactions {
              __typename
              nextToken
            }
            case {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              note
              birthdayOfInterviewee
              interviewType
              interviewAccess
              theOtherPersonsPresent
            }
          }
          RedactionIntervals {
            __typename
            items {
              __typename
              id
              redactionVersion
              startSecond
              endSecond
              type
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRedactionQuery>response.data.getRedaction;
  }
  async ListRedactions(
    filter?: ModelRedactionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRedactionsQuery> {
    const statement = `query ListRedactions($filter: ModelRedactionFilterInput, $limit: Int, $nextToken: String) {
        listRedactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            redactionVersion
            description
            updatedDateTime
            updatedBy
            status
            recording {
              __typename
              id
              url
              bucket
              key
              lastmodified
              description
              camera
              version
            }
            RedactionIntervals {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRedactionsQuery>response.data.listRedactions;
  }
  async GetRedactionInterval(id: string): Promise<GetRedactionIntervalQuery> {
    const statement = `query GetRedactionInterval($id: ID!) {
        getRedactionInterval(id: $id) {
          __typename
          id
          redactionVersion
          startSecond
          endSecond
          type
          redacton {
            __typename
            id
            redactionVersion
            description
            updatedDateTime
            updatedBy
            status
            recording {
              __typename
              id
              url
              bucket
              key
              lastmodified
              description
              camera
              version
            }
            RedactionIntervals {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRedactionIntervalQuery>response.data.getRedactionInterval;
  }
  async ListRedactionIntervals(
    filter?: ModelRedactionIntervalFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRedactionIntervalsQuery> {
    const statement = `query ListRedactionIntervals($filter: ModelRedactionIntervalFilterInput, $limit: Int, $nextToken: String) {
        listRedactionIntervals(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            redactionVersion
            startSecond
            endSecond
            type
            redacton {
              __typename
              id
              redactionVersion
              description
              updatedDateTime
              updatedBy
              status
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRedactionIntervalsQuery>response.data.listRedactionIntervals;
  }
  async GetShared(id: string): Promise<GetSharedQuery> {
    const statement = `query GetShared($id: ID!) {
        getShared(id: $id) {
          __typename
          id
          createdDateTime
          createdBy
          receiver
          receiver_email
          receiver_type
          expiry_date
          token
          urls
          status
          description
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSharedQuery>response.data.getShared;
  }
  async ListShareds(
    filter?: ModelSharedFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSharedsQuery> {
    const statement = `query ListShareds($filter: ModelSharedFilterInput, $limit: Int, $nextToken: String) {
        listShareds(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            createdDateTime
            createdBy
            receiver
            receiver_email
            receiver_type
            expiry_date
            token
            urls
            status
            description
            case {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              note
              birthdayOfInterviewee
              interviewType
              interviewAccess
              theOtherPersonsPresent
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSharedsQuery>response.data.listShareds;
  }
  async GetTranscription(id: string): Promise<GetTranscriptionQuery> {
    const statement = `query GetTranscription($id: ID!) {
        getTranscription(id: $id) {
          __typename
          id
          submitTime
          transcriptionFileUrl
          status
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTranscriptionQuery>response.data.getTranscription;
  }
  async ListTranscriptions(
    filter?: ModelTranscriptionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTranscriptionsQuery> {
    const statement = `query ListTranscriptions($filter: ModelTranscriptionFilterInput, $limit: Int, $nextToken: String) {
        listTranscriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            submitTime
            transcriptionFileUrl
            status
            case {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              note
              birthdayOfInterviewee
              interviewType
              interviewAccess
              theOtherPersonsPresent
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTranscriptionsQuery>response.data.listTranscriptions;
  }
  async GetLog(id: string): Promise<GetLogQuery> {
    const statement = `query GetLog($id: ID!) {
        getLog(id: $id) {
          __typename
          id
          dateTime
          description
          userName
          recordId
          tableName
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetLogQuery>response.data.getLog;
  }
  async ListLogs(
    filter?: ModelLogFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLogsQuery> {
    const statement = `query ListLogs($filter: ModelLogFilterInput, $limit: Int, $nextToken: String) {
        listLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            dateTime
            description
            userName
            recordId
            tableName
            case {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              note
              birthdayOfInterviewee
              interviewType
              interviewAccess
              theOtherPersonsPresent
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListLogsQuery>response.data.listLogs;
  }
  OnCreateCaseListener: Observable<OnCreateCaseSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateCase {
        onCreateCase {
          __typename
          id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          location
          unitId
          path
          note
          birthdayOfInterviewee
          interviewType
          interviewAccess
          theOtherPersonsPresent
          attachments {
            __typename
            items {
              __typename
              id
              description
              url
              updatedDateTime
              updatedBy
            }
            nextToken
          }
          recordings {
            __typename
            items {
              __typename
              id
              url
              bucket
              key
              lastmodified
              description
              camera
              version
            }
            nextToken
          }
          logs {
            __typename
            items {
              __typename
              id
              dateTime
              description
              userName
              recordId
              tableName
            }
            nextToken
          }
          transcriptions {
            __typename
            items {
              __typename
              id
              submitTime
              transcriptionFileUrl
              status
            }
            nextToken
          }
          bookmarks {
            __typename
            items {
              __typename
              id
              order
              dateTime
              speaker
              content
              updatedDateTime
              updatedBy
            }
            nextToken
          }
          shareds {
            __typename
            items {
              __typename
              id
              createdDateTime
              createdBy
              receiver
              receiver_email
              receiver_type
              expiry_date
              token
              urls
              status
              description
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateCaseSubscription>;

  OnUpdateCaseListener: Observable<OnUpdateCaseSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCase {
        onUpdateCase {
          __typename
          id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          location
          unitId
          path
          note
          birthdayOfInterviewee
          interviewType
          interviewAccess
          theOtherPersonsPresent
          attachments {
            __typename
            items {
              __typename
              id
              description
              url
              updatedDateTime
              updatedBy
            }
            nextToken
          }
          recordings {
            __typename
            items {
              __typename
              id
              url
              bucket
              key
              lastmodified
              description
              camera
              version
            }
            nextToken
          }
          logs {
            __typename
            items {
              __typename
              id
              dateTime
              description
              userName
              recordId
              tableName
            }
            nextToken
          }
          transcriptions {
            __typename
            items {
              __typename
              id
              submitTime
              transcriptionFileUrl
              status
            }
            nextToken
          }
          bookmarks {
            __typename
            items {
              __typename
              id
              order
              dateTime
              speaker
              content
              updatedDateTime
              updatedBy
            }
            nextToken
          }
          shareds {
            __typename
            items {
              __typename
              id
              createdDateTime
              createdBy
              receiver
              receiver_email
              receiver_type
              expiry_date
              token
              urls
              status
              description
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateCaseSubscription>;

  OnDeleteCaseListener: Observable<OnDeleteCaseSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCase {
        onDeleteCase {
          __typename
          id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          location
          unitId
          path
          note
          birthdayOfInterviewee
          interviewType
          interviewAccess
          theOtherPersonsPresent
          attachments {
            __typename
            items {
              __typename
              id
              description
              url
              updatedDateTime
              updatedBy
            }
            nextToken
          }
          recordings {
            __typename
            items {
              __typename
              id
              url
              bucket
              key
              lastmodified
              description
              camera
              version
            }
            nextToken
          }
          logs {
            __typename
            items {
              __typename
              id
              dateTime
              description
              userName
              recordId
              tableName
            }
            nextToken
          }
          transcriptions {
            __typename
            items {
              __typename
              id
              submitTime
              transcriptionFileUrl
              status
            }
            nextToken
          }
          bookmarks {
            __typename
            items {
              __typename
              id
              order
              dateTime
              speaker
              content
              updatedDateTime
              updatedBy
            }
            nextToken
          }
          shareds {
            __typename
            items {
              __typename
              id
              createdDateTime
              createdBy
              receiver
              receiver_email
              receiver_type
              expiry_date
              token
              urls
              status
              description
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteCaseSubscription>;

  OnCreateRecordingListener: Observable<
    OnCreateRecordingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRecording {
        onCreateRecording {
          __typename
          id
          url
          bucket
          key
          lastmodified
          description
          camera
          version
          redactions {
            __typename
            items {
              __typename
              id
              redactionVersion
              description
              updatedDateTime
              updatedBy
              status
            }
            nextToken
          }
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateRecordingSubscription>;

  OnUpdateRecordingListener: Observable<
    OnUpdateRecordingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRecording {
        onUpdateRecording {
          __typename
          id
          url
          bucket
          key
          lastmodified
          description
          camera
          version
          redactions {
            __typename
            items {
              __typename
              id
              redactionVersion
              description
              updatedDateTime
              updatedBy
              status
            }
            nextToken
          }
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateRecordingSubscription>;

  OnDeleteRecordingListener: Observable<
    OnDeleteRecordingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRecording {
        onDeleteRecording {
          __typename
          id
          url
          bucket
          key
          lastmodified
          description
          camera
          version
          redactions {
            __typename
            items {
              __typename
              id
              redactionVersion
              description
              updatedDateTime
              updatedBy
              status
            }
            nextToken
          }
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteRecordingSubscription>;

  OnCreateAttachmentListener: Observable<
    OnCreateAttachmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateAttachment {
        onCreateAttachment {
          __typename
          id
          description
          url
          updatedDateTime
          updatedBy
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateAttachmentSubscription>;

  OnUpdateAttachmentListener: Observable<
    OnUpdateAttachmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateAttachment {
        onUpdateAttachment {
          __typename
          id
          description
          url
          updatedDateTime
          updatedBy
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateAttachmentSubscription>;

  OnDeleteAttachmentListener: Observable<
    OnDeleteAttachmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteAttachment {
        onDeleteAttachment {
          __typename
          id
          description
          url
          updatedDateTime
          updatedBy
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteAttachmentSubscription>;

  OnCreateBookmarkListener: Observable<
    OnCreateBookmarkSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBookmark {
        onCreateBookmark {
          __typename
          id
          order
          dateTime
          speaker
          content
          updatedDateTime
          updatedBy
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateBookmarkSubscription>;

  OnUpdateBookmarkListener: Observable<
    OnUpdateBookmarkSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBookmark {
        onUpdateBookmark {
          __typename
          id
          order
          dateTime
          speaker
          content
          updatedDateTime
          updatedBy
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateBookmarkSubscription>;

  OnDeleteBookmarkListener: Observable<
    OnDeleteBookmarkSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBookmark {
        onDeleteBookmark {
          __typename
          id
          order
          dateTime
          speaker
          content
          updatedDateTime
          updatedBy
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteBookmarkSubscription>;

  OnCreateRedactionListener: Observable<
    OnCreateRedactionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRedaction {
        onCreateRedaction {
          __typename
          id
          redactionVersion
          description
          updatedDateTime
          updatedBy
          status
          recording {
            __typename
            id
            url
            bucket
            key
            lastmodified
            description
            camera
            version
            redactions {
              __typename
              nextToken
            }
            case {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              note
              birthdayOfInterviewee
              interviewType
              interviewAccess
              theOtherPersonsPresent
            }
          }
          RedactionIntervals {
            __typename
            items {
              __typename
              id
              redactionVersion
              startSecond
              endSecond
              type
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateRedactionSubscription>;

  OnUpdateRedactionListener: Observable<
    OnUpdateRedactionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRedaction {
        onUpdateRedaction {
          __typename
          id
          redactionVersion
          description
          updatedDateTime
          updatedBy
          status
          recording {
            __typename
            id
            url
            bucket
            key
            lastmodified
            description
            camera
            version
            redactions {
              __typename
              nextToken
            }
            case {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              note
              birthdayOfInterviewee
              interviewType
              interviewAccess
              theOtherPersonsPresent
            }
          }
          RedactionIntervals {
            __typename
            items {
              __typename
              id
              redactionVersion
              startSecond
              endSecond
              type
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateRedactionSubscription>;

  OnDeleteRedactionListener: Observable<
    OnDeleteRedactionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRedaction {
        onDeleteRedaction {
          __typename
          id
          redactionVersion
          description
          updatedDateTime
          updatedBy
          status
          recording {
            __typename
            id
            url
            bucket
            key
            lastmodified
            description
            camera
            version
            redactions {
              __typename
              nextToken
            }
            case {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              note
              birthdayOfInterviewee
              interviewType
              interviewAccess
              theOtherPersonsPresent
            }
          }
          RedactionIntervals {
            __typename
            items {
              __typename
              id
              redactionVersion
              startSecond
              endSecond
              type
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteRedactionSubscription>;

  OnCreateRedactionIntervalListener: Observable<
    OnCreateRedactionIntervalSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRedactionInterval {
        onCreateRedactionInterval {
          __typename
          id
          redactionVersion
          startSecond
          endSecond
          type
          redacton {
            __typename
            id
            redactionVersion
            description
            updatedDateTime
            updatedBy
            status
            recording {
              __typename
              id
              url
              bucket
              key
              lastmodified
              description
              camera
              version
            }
            RedactionIntervals {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateRedactionIntervalSubscription>;

  OnUpdateRedactionIntervalListener: Observable<
    OnUpdateRedactionIntervalSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRedactionInterval {
        onUpdateRedactionInterval {
          __typename
          id
          redactionVersion
          startSecond
          endSecond
          type
          redacton {
            __typename
            id
            redactionVersion
            description
            updatedDateTime
            updatedBy
            status
            recording {
              __typename
              id
              url
              bucket
              key
              lastmodified
              description
              camera
              version
            }
            RedactionIntervals {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateRedactionIntervalSubscription>;

  OnDeleteRedactionIntervalListener: Observable<
    OnDeleteRedactionIntervalSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRedactionInterval {
        onDeleteRedactionInterval {
          __typename
          id
          redactionVersion
          startSecond
          endSecond
          type
          redacton {
            __typename
            id
            redactionVersion
            description
            updatedDateTime
            updatedBy
            status
            recording {
              __typename
              id
              url
              bucket
              key
              lastmodified
              description
              camera
              version
            }
            RedactionIntervals {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteRedactionIntervalSubscription>;

  OnCreateSharedListener: Observable<OnCreateSharedSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateShared {
        onCreateShared {
          __typename
          id
          createdDateTime
          createdBy
          receiver
          receiver_email
          receiver_type
          expiry_date
          token
          urls
          status
          description
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateSharedSubscription>;

  OnUpdateSharedListener: Observable<OnUpdateSharedSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateShared {
        onUpdateShared {
          __typename
          id
          createdDateTime
          createdBy
          receiver
          receiver_email
          receiver_type
          expiry_date
          token
          urls
          status
          description
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateSharedSubscription>;

  OnDeleteSharedListener: Observable<OnDeleteSharedSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteShared {
        onDeleteShared {
          __typename
          id
          createdDateTime
          createdBy
          receiver
          receiver_email
          receiver_type
          expiry_date
          token
          urls
          status
          description
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteSharedSubscription>;

  OnCreateTranscriptionListener: Observable<
    OnCreateTranscriptionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTranscription {
        onCreateTranscription {
          __typename
          id
          submitTime
          transcriptionFileUrl
          status
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateTranscriptionSubscription>;

  OnUpdateTranscriptionListener: Observable<
    OnUpdateTranscriptionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTranscription {
        onUpdateTranscription {
          __typename
          id
          submitTime
          transcriptionFileUrl
          status
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateTranscriptionSubscription>;

  OnDeleteTranscriptionListener: Observable<
    OnDeleteTranscriptionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTranscription {
        onDeleteTranscription {
          __typename
          id
          submitTime
          transcriptionFileUrl
          status
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteTranscriptionSubscription>;

  OnCreateLogListener: Observable<OnCreateLogSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateLog {
        onCreateLog {
          __typename
          id
          dateTime
          description
          userName
          recordId
          tableName
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateLogSubscription>;

  OnUpdateLogListener: Observable<OnUpdateLogSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLog {
        onUpdateLog {
          __typename
          id
          dateTime
          description
          userName
          recordId
          tableName
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateLogSubscription>;

  OnDeleteLogListener: Observable<OnDeleteLogSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLog {
        onDeleteLog {
          __typename
          id
          dateTime
          description
          userName
          recordId
          tableName
          case {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
            note
            birthdayOfInterviewee
            interviewType
            interviewAccess
            theOtherPersonsPresent
            attachments {
              __typename
              nextToken
            }
            recordings {
              __typename
              nextToken
            }
            logs {
              __typename
              nextToken
            }
            transcriptions {
              __typename
              nextToken
            }
            bookmarks {
              __typename
              nextToken
            }
            shareds {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteLogSubscription>;
}
