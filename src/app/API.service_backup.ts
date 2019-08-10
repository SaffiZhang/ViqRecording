/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateRecordingInput = {
  id?: string | null;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string;
};

export type UpdateRecordingInput = {
  id: string;
  interviewee?: string | null;
  interviewFinish?: string | null;
  interviewStart?: string | null;
  officerCollarNumber?: string | null;
  location?: string | null;
  unitId?: string | null;
  path?: string | null;
};

export type DeleteRecordingInput = {
  id?: string | null;
};

export type CreateAttachmentInput = {
  id: string;
  description: string;
  url: string;
  updatedDateTime: string;
  updatedBy: string;
  attachmentRecordingId: string;
};

export type UpdateAttachmentInput = {
  id: string;
  description?: string | null;
  url?: string | null;
  updatedDateTime?: string | null;
  updatedBy?: string | null;
  attachmentRecordingId?: string | null;
};

export type DeleteAttachmentInput = {
  id?: string | null;
};

export type CreateUrlInput = {
  id: string;
  url: string;
  lastmodified: string;
  description: string;
  camera: string;
  version: string;
  urlRecordingId: string;
};

export type UpdateUrlInput = {
  id: string;
  url?: string | null;
  lastmodified?: string | null;
  description?: string | null;
  camera?: string | null;
  version?: string | null;
  urlRecordingId?: string | null;
};

export type DeleteUrlInput = {
  id?: string | null;
};

export type CreateLogInput = {
  id: string;
  dateTime: string;
  description: string;
  userName: string;
  recordId: string;
  tableName: string;
  logRecordingId: string;
};

export type UpdateLogInput = {
  id: string;
  dateTime?: string | null;
  description?: string | null;
  userName?: string | null;
  recordId?: string | null;
  tableName?: string | null;
  logRecordingId?: string | null;
};

export type DeleteLogInput = {
  id?: string | null;
};

export type CreateRedactionInput = {
  id: string;
  redactionVersion: string;
  description: string;
  updatedDateTime: string;
  updatedBy: string;
  status: string;
  redactionUrlId: string;
};

export type UpdateRedactionInput = {
  id: string;
  redactionVersion?: string | null;
  description?: string | null;
  updatedDateTime?: string | null;
  updatedBy?: string | null;
  status?: string | null;
  redactionUrlId?: string | null;
};

export type DeleteRedactionInput = {
  id?: string | null;
};

export type CreateRedactionIntervalInput = {
  id: string;
  redactionVersion: string;
  startSecond: number;
  endSecond: number;
  type: string;
  redactionIntervalRedactionId: string;
};

export type UpdateRedactionIntervalInput = {
  id: string;
  redactionVersion?: string | null;
  startSecond?: number | null;
  endSecond?: number | null;
  type?: string | null;
  redactionIntervalRedactionId?: string | null;
};

export type DeleteRedactionIntervalInput = {
  id?: string | null;
};

export type CreateBookmarkInput = {
  id: string;
  order: number;
  dateTime: string;
  speaker?: string | null;
  content: string;
  updatedDateTime: string;
  updatedBy: string;
  bookmarkRecordingId: string;
};

export type UpdateBookmarkInput = {
  id: string;
  order?: number | null;
  dateTime?: string | null;
  speaker?: string | null;
  content?: string | null;
  updatedDateTime?: string | null;
  updatedBy?: string | null;
  bookmarkRecordingId?: string | null;
};

export type DeleteBookmarkInput = {
  id?: string | null;
};

export type CreateTranscriptionInput = {
  id?: string | null;
  submitTime: string;
  transcriptionFileUrl?: string | null;
  status: string;
  transcriptionRecordingId: string;
};

export type UpdateTranscriptionInput = {
  id: string;
  submitTime?: string | null;
  transcriptionFileUrl?: string | null;
  status?: string | null;
  transcriptionRecordingId?: string | null;
};

export type DeleteTranscriptionInput = {
  id?: string | null;
};

export type CreateSharedInput = {
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
  description?: string | null;
  sharedRecordingId: string;
};

export type UpdateSharedInput = {
  id: string;
  dateTime?: string | null;
  receiver?: string | null;
  receiver_email?: string | null;
  receiver_type?: string | null;
  expiry_date?: string | null;
  token?: string | null;
  urls?: Array<string | null> | null;
  status?: string | null;
  sharedRecordingId?: string | null;
};

export type DeleteSharedInput = {
  id?: string | null;
};

export type ModelRecordingFilterInput = {
  id?: ModelStringFilterInput | null;
  interviewee?: ModelStringFilterInput | null;
  interviewFinish?: ModelStringFilterInput | null;
  interviewStart?: ModelStringFilterInput | null;
  officerCollarNumber?: ModelStringFilterInput | null;
  location?: ModelStringFilterInput | null;
  path?: ModelStringFilterInput | null;
  unitId?: ModelStringFilterInput | null;
  and?: Array<ModelRecordingFilterInput | null> | null;
  or?: Array<ModelRecordingFilterInput | null> | null;
  not?: ModelRecordingFilterInput | null;
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

export type ModelAttachmentFilterInput = {
  id?: ModelIDFilterInput | null;
  description?: ModelStringFilterInput | null;
  url?: ModelStringFilterInput | null;
  attachmentRecordingId?: ModelStringFilterInput | null;
  and?: Array<ModelAttachmentFilterInput | null> | null;
  or?: Array<ModelAttachmentFilterInput | null> | null;
  not?: ModelAttachmentFilterInput | null;
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

export type ModelUrlFilterInput = {
  id?: ModelIDFilterInput | null;
  url?: ModelStringFilterInput | null;
  lastmodified?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  camera?: ModelStringFilterInput | null;
  version?: ModelStringFilterInput | null;
  urlRecordingId?: ModelStringFilterInput | null;
  and?: Array<ModelUrlFilterInput | null> | null;
  or?: Array<ModelUrlFilterInput | null> | null;
  not?: ModelUrlFilterInput | null;
};

export type ModelLogFilterInput = {
  id?: ModelIDFilterInput | null;
  dateTime?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  userName?: ModelStringFilterInput | null;
  logRecordingId?: ModelStringFilterInput | null;
  and?: Array<ModelLogFilterInput | null> | null;
  or?: Array<ModelLogFilterInput | null> | null;
  not?: ModelLogFilterInput | null;
};

export type ModelRedactionFilterInput = {
  id?: ModelIDFilterInput | null;
  redactionVersion?: ModelStringFilterInput | null;
  redactionUrlId?: ModelStringFilterInput | null;
  and?: Array<ModelRedactionFilterInput | null> | null;
  or?: Array<ModelRedactionFilterInput | null> | null;
  not?: ModelRedactionFilterInput | null;
};

export type ModelRedactionIntervalFilterInput = {
  id?: ModelIDFilterInput | null;
  redactionId?: ModelStringFilterInput | null;
  and?: Array<ModelRedactionIntervalFilterInput | null> | null;
  or?: Array<ModelRedactionIntervalFilterInput | null> | null;
  not?: ModelRedactionIntervalFilterInput | null;
};

export type ModelBookmarkFilterInput = {
  id?: ModelIDFilterInput | null;
  dateTime?: ModelStringFilterInput | null;
  speaker?: ModelStringFilterInput | null;
  content?: ModelStringFilterInput | null;
  updatedDateTime?: ModelStringFilterInput | null;
  updatedBy?: ModelStringFilterInput | null;
  bookmarkRecordingId?: ModelStringFilterInput | null;
  and?: Array<ModelBookmarkFilterInput | null> | null;
  or?: Array<ModelBookmarkFilterInput | null> | null;
  not?: ModelBookmarkFilterInput | null;
};

export type ModelTranscriptionFilterInput = {
  id?: ModelIDFilterInput | null;
  submitTime?: ModelStringFilterInput | null;
  transcriptionRecordingId?: ModelStringFilterInput | null;
  and?: Array<ModelTranscriptionFilterInput | null> | null;
  or?: Array<ModelTranscriptionFilterInput | null> | null;
  not?: ModelTranscriptionFilterInput | null;
};

export type ModelSharedFilterInput = {
  id?: ModelIDFilterInput | null;
  dateTime?: ModelStringFilterInput | null;
  receiver?: ModelStringFilterInput | null;
  receiver_email?: ModelStringFilterInput | null;
  receiver_type?: ModelStringFilterInput | null;
  token?: ModelStringFilterInput | null;
  urls?: ModelStringFilterInput | null;
  expiry_date?: ModelStringFilterInput | null;
  createdDateTime?: ModelStringFilterInput | null;
  createdBy?: ModelStringFilterInput | null;
  status?: ModelStringFilterInput | null;
  sharedRecordingId?: ModelStringFilterInput | null;
  and?: Array<ModelSharedFilterInput | null> | null;
  or?: Array<ModelSharedFilterInput | null> | null;
  not?: ModelSharedFilterInput | null;
};

export type CreateRecordingMutation = {
  __typename: "Recording";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string;
  attachments: {
    __typename: "ModelAttachmentConnection";
    items: Array<{
      __typename: "Attachment";
      id: string;
      description: string;
      url: string;
      updatedDateTime: string;
      updatedBy: string;
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  urls: {
    __typename: "ModelUrlConnection";
    items: Array<{
      __typename: "Url";
      id: string;
      url: string;
      lastmodified: string;
      description: string;
      camera: string;
      version: string;
      redactions: {
        __typename: "ModelRedactionConnection";
        nextToken: string | null;
      } | null;
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
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
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
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
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
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
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
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
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateRecordingMutation = {
  __typename: "Recording";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string;
  attachments: {
    __typename: "ModelAttachmentConnection";
    items: Array<{
      __typename: "Attachment";
      id: string;
      description: string;
      url: string;
      updatedDateTime: string;
      updatedBy: string;
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  urls: {
    __typename: "ModelUrlConnection";
    items: Array<{
      __typename: "Url";
      id: string;
      url: string;
      lastmodified: string;
      description: string;
      camera: string;
      version: string;
      redactions: {
        __typename: "ModelRedactionConnection";
        nextToken: string | null;
      } | null;
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
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
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
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
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
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
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
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
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteRecordiingMutation = {
  __typename: "Recording";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string;
  attachments: {
    __typename: "ModelAttachmentConnection";
    items: Array<{
      __typename: "Attachment";
      id: string;
      description: string;
      url: string;
      updatedDateTime: string;
      updatedBy: string;
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  urls: {
    __typename: "ModelUrlConnection";
    items: Array<{
      __typename: "Url";
      id: string;
      url: string;
      lastmodified: string;
      description: string;
      camera: string;
      version: string;
      redactions: {
        __typename: "ModelRedactionConnection";
        nextToken: string | null;
      } | null;
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
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
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
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
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
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
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
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
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateAttachmentMutation = {
  __typename: "Attachment";
  id: string;
  description: string;
  url: string;
  updatedDateTime: string;
  updatedBy: string;
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  } | null;
};

export type UpdateAttachmentMutation = {
  __typename: "Attachment";
  id: string;
  description: string;
  url: string;
  updatedDateTime: string;
  updatedBy: string;
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  } | null;
};

export type DeleteAttachmentMutation = {
  __typename: "Attachment";
  id: string;
  description: string;
  url: string;
  updatedDateTime: string;
  updatedBy: string;
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  } | null;
};

export type CreateUrlMutation = {
  __typename: "Url";
  id: string;
  url: string;
  lastmodified: string;
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
      url: {
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
        description: string;
        camera: string;
        version: string;
      } | null;
      intervals: {
        __typename: "ModelRedactionIntervalConnection";
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  } | null;
};

export type UpdateUrlMutation = {
  __typename: "Url";
  id: string;
  url: string;
  lastmodified: string;
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
      url: {
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
        description: string;
        camera: string;
        version: string;
      } | null;
      intervals: {
        __typename: "ModelRedactionIntervalConnection";
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  } | null;
};

export type DeleteUrlMutation = {
  __typename: "Url";
  id: string;
  url: string;
  lastmodified: string;
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
      url: {
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
        description: string;
        camera: string;
        version: string;
      } | null;
      intervals: {
        __typename: "ModelRedactionIntervalConnection";
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  url: {
    __typename: "Url";
    id: string;
    url: string;
    lastmodified: string;
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
    recording: {
      __typename: "Recording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      attachments: {
        __typename: "ModelAttachmentConnection";
        nextToken: string | null;
      } | null;
      urls: {
        __typename: "ModelUrlConnection";
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
  } | null;
  intervals: {
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
  url: {
    __typename: "Url";
    id: string;
    url: string;
    lastmodified: string;
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
    recording: {
      __typename: "Recording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      attachments: {
        __typename: "ModelAttachmentConnection";
        nextToken: string | null;
      } | null;
      urls: {
        __typename: "ModelUrlConnection";
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
  } | null;
  intervals: {
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
  url: {
    __typename: "Url";
    id: string;
    url: string;
    lastmodified: string;
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
    recording: {
      __typename: "Recording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      attachments: {
        __typename: "ModelAttachmentConnection";
        nextToken: string | null;
      } | null;
      urls: {
        __typename: "ModelUrlConnection";
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
  } | null;
  intervals: {
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
    url: {
      __typename: "Url";
      id: string;
      url: string;
      lastmodified: string;
      description: string;
      camera: string;
      version: string;
      redactions: {
        __typename: "ModelRedactionConnection";
        nextToken: string | null;
      } | null;
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
    } | null;
    intervals: {
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
    url: {
      __typename: "Url";
      id: string;
      url: string;
      lastmodified: string;
      description: string;
      camera: string;
      version: string;
      redactions: {
        __typename: "ModelRedactionConnection";
        nextToken: string | null;
      } | null;
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
    } | null;
    intervals: {
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
    url: {
      __typename: "Url";
      id: string;
      url: string;
      lastmodified: string;
      description: string;
      camera: string;
      version: string;
      redactions: {
        __typename: "ModelRedactionConnection";
        nextToken: string | null;
      } | null;
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
    } | null;
    intervals: {
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
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  } | null;
};

export type CreateTranscriptionMutation = {
  __typename: "Transcription";
  id: string;
  submitTime: string;
  transcriptionFileUrl: string;
  status: string;
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  } | null;
};

export type UpdateTranscriptionMutation = {
  __typename: "Transcription";
  id: string;
  submitTime: string;
  transcriptionFileUrl: string;
  status: string;
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  } | null;
};

export type DeleteTranscriptionMutation = {
  __typename: "Transcription";
  id: string;
  submitTime: string;
  transcriptionFileUrl: string;
  status: string;
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  } | null;
};

export type GetRecordingQuery = {
  __typename: "Recording";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string;
  attachments: {
    __typename: "ModelAttachmentConnection";
    items: Array<{
      __typename: "Attachment";
      id: string;
      description: string;
      url: string;
      updatedDateTime: string;
      updatedBy: string;
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  urls: {
    __typename: "ModelUrlConnection";
    items: Array<{
      __typename: "Url";
      id: string;
      url: string;
      lastmodified: string;
      description: string;
      camera: string;
      version: string;
      redactions: {
        __typename: "ModelRedactionConnection";
        nextToken: string | null;
      } | null;
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
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
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
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
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
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
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
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
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListRecordingsQuery = {
  __typename: "ModelRecordingConnection";
  items: Array<{
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
    recording: {
      __typename: "Recording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      attachments: {
        __typename: "ModelAttachmentConnection";
        nextToken: string | null;
      } | null;
      urls: {
        __typename: "ModelUrlConnection";
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
  } | null> | null;
  nextToken: string | null;
};

export type GetUrlQuery = {
  __typename: "Url";
  id: string;
  url: string;
  lastmodified: string;
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
      url: {
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
        description: string;
        camera: string;
        version: string;
      } | null;
      intervals: {
        __typename: "ModelRedactionIntervalConnection";
        nextToken: string | null;
      } | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  } | null;
};

export type ListUrlsQuery = {
  __typename: "ModelUrlConnection";
  items: Array<{
    __typename: "Url";
    id: string;
    url: string;
    lastmodified: string;
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
    recording: {
      __typename: "Recording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      attachments: {
        __typename: "ModelAttachmentConnection";
        nextToken: string | null;
      } | null;
      urls: {
        __typename: "ModelUrlConnection";
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
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
    recording: {
      __typename: "Recording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      attachments: {
        __typename: "ModelAttachmentConnection";
        nextToken: string | null;
      } | null;
      urls: {
        __typename: "ModelUrlConnection";
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
  url: {
    __typename: "Url";
    id: string;
    url: string;
    lastmodified: string;
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
    recording: {
      __typename: "Recording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      attachments: {
        __typename: "ModelAttachmentConnection";
        nextToken: string | null;
      } | null;
      urls: {
        __typename: "ModelUrlConnection";
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
  } | null;
  intervals: {
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
    url: {
      __typename: "Url";
      id: string;
      url: string;
      lastmodified: string;
      description: string;
      camera: string;
      version: string;
      redactions: {
        __typename: "ModelRedactionConnection";
        nextToken: string | null;
      } | null;
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
    } | null;
    intervals: {
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
    url: {
      __typename: "Url";
      id: string;
      url: string;
      lastmodified: string;
      description: string;
      camera: string;
      version: string;
      redactions: {
        __typename: "ModelRedactionConnection";
        nextToken: string | null;
      } | null;
      recording: {
        __typename: "Recording";
        id: string;
        interviewee: string;
        interviewFinish: string;
        interviewStart: string;
        officerCollarNumber: string;
        location: string;
        unitId: string;
        path: string;
      } | null;
    } | null;
    intervals: {
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
  } | null;
};

export type ListRedactionsIntervalQuery = {
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
      url: {
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
        description: string;
        camera: string;
        version: string;
      } | null;
      intervals: {
        __typename: "ModelRedactionIntervalConnection";
        nextToken: string | null;
      } | null;
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
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
  } | null;
};

export type ListBookmarkQuery = {
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
    recording: {
      __typename: "Recording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      attachments: {
        __typename: "ModelAttachmentConnection";
        nextToken: string | null;
      } | null;
      urls: {
        __typename: "ModelUrlConnection";
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
  } | null> | null;
  nextToken: string | null;
};

export type GetTranscriptionQuery = {
  __typename: "Transcription";
  id: string;
  submitTime: string;
  transcriptionFileUrl: string;
  status: string;
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
    recording: {
      __typename: "Recording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      attachments: {
        __typename: "ModelAttachmentConnection";
        nextToken: string | null;
      } | null;
      urls: {
        __typename: "ModelUrlConnection";
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
  recording: {
    __typename: "Recording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string;
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
    urls: {
      __typename: "ModelUrlConnection";
      items: Array<{
        __typename: "Url";
        id: string;
        url: string;
        lastmodified: string;
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
    recording: {
      __typename: "Recording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string;
      attachments: {
        __typename: "ModelAttachmentConnection";
        nextToken: string | null;
      } | null;
      urls: {
        __typename: "ModelUrlConnection";
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
  } | null> | null;
  nextToken: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateRecording(
    input: CreateRecordingInput
  ): Promise<CreateRecordingMutation> {
    const statement = `mutation CreateRecording($input: CreateRecordingInput!) {
        createRecording(input: $input) {
          __typename
          id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          location
          unitId
          path
          attachments {
            __typename
            items {
              __typename
              id
              description
              url
              updatedDateTime
              updatedBy
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
            }
            nextToken
          }
          urls {
            __typename
            items {
              __typename
              id
              url
              lastmodified
              description
              camera
              version
              redactions {
                __typename
                nextToken
              }
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
    return <CreateRecordingMutation>response.data.createRecording;
  }
  async UpdateRecording(
    input: UpdateRecordingInput
  ): Promise<UpdateRecordingMutation> {
    const statement = `mutation UpdateRecording($input: UpdateRecordingInput!) {
        updateRecording(input: $input) {
          __typename
          id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          location
          unitId
          path
          attachments {
            __typename
            items {
              __typename
              id
              description
              url
              updatedDateTime
              updatedBy
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
            }
            nextToken
          }
          urls {
            __typename
            items {
              __typename
              id
              url
              lastmodified
              description
              camera
              version
              redactions {
                __typename
                nextToken
              }
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
    return <UpdateRecordingMutation>response.data.updateRecording;
  }
  async DeleteRecordiing(
    input: DeleteRecordingInput
  ): Promise<DeleteRecordiingMutation> {
    const statement = `mutation DeleteRecordiing($input: DeleteRecordingInput!) {
        deleteRecordiing(input: $input) {
          __typename
          id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          location
          unitId
          path
          attachments {
            __typename
            items {
              __typename
              id
              description
              url
              updatedDateTime
              updatedBy
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
            }
            nextToken
          }
          urls {
            __typename
            items {
              __typename
              id
              url
              lastmodified
              description
              camera
              version
              redactions {
                __typename
                nextToken
              }
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
    return <DeleteRecordiingMutation>response.data.deleteRecordiing;
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
  async CreateUrl(input: CreateUrlInput): Promise<CreateUrlMutation> {
    const statement = `mutation CreateUrl($input: CreateUrlInput!) {
        createUrl(input: $input) {
          __typename
          id
          url
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
              url {
                __typename
                id
                url
                lastmodified
                description
                camera
                version
              }
              intervals {
                __typename
                nextToken
              }
            }
            nextToken
          }
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUrlMutation>response.data.createUrl;
  }
  async UpdateUrl(input: UpdateUrlInput): Promise<UpdateUrlMutation> {
    const statement = `mutation UpdateUrl($input: UpdateUrlInput!) {
        updateUrl(input: $input) {
          __typename
          id
          url
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
              url {
                __typename
                id
                url
                lastmodified
                description
                camera
                version
              }
              intervals {
                __typename
                nextToken
              }
            }
            nextToken
          }
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUrlMutation>response.data.updateUrl;
  }
  async DeleteUrl(input: DeleteUrlInput): Promise<DeleteUrlMutation> {
    const statement = `mutation DeleteUrl($input: DeleteUrlInput!) {
        deleteUrl(input: $input) {
          __typename
          id
          url
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
              url {
                __typename
                id
                url
                lastmodified
                description
                camera
                version
              }
              intervals {
                __typename
                nextToken
              }
            }
            nextToken
          }
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUrlMutation>response.data.deleteUrl;
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
          url {
            __typename
            id
            url
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
            recording {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              attachments {
                __typename
                nextToken
              }
              urls {
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
          intervals {
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
          url {
            __typename
            id
            url
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
            recording {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              attachments {
                __typename
                nextToken
              }
              urls {
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
          intervals {
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
          url {
            __typename
            id
            url
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
            recording {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              attachments {
                __typename
                nextToken
              }
              urls {
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
          intervals {
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
            url {
              __typename
              id
              url
              lastmodified
              description
              camera
              version
              redactions {
                __typename
                nextToken
              }
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
            }
            intervals {
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
            url {
              __typename
              id
              url
              lastmodified
              description
              camera
              version
              redactions {
                __typename
                nextToken
              }
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
            }
            intervals {
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
            url {
              __typename
              id
              url
              lastmodified
              description
              camera
              version
              redactions {
                __typename
                nextToken
              }
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
            }
            intervals {
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
  async GetRecording(id: string): Promise<GetRecordingQuery> {
    const statement = `query GetRecording($id: ID!) {
        getRecording(id: $id) {
          __typename
          id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          location
          unitId
          path
          attachments {
            __typename
            items {
              __typename
              id
              description
              url
              updatedDateTime
              updatedBy
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
            }
            nextToken
          }
          urls {
            __typename
            items {
              __typename
              id
              url
              lastmodified
              description
              camera
              version
              redactions {
                __typename
                nextToken
              }
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
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
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
            recording {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              attachments {
                __typename
                nextToken
              }
              urls {
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
  async GetUrl(id: string): Promise<GetUrlQuery> {
    const statement = `query GetUrl($id: ID!) {
        getUrl(id: $id) {
          __typename
          id
          url
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
              url {
                __typename
                id
                url
                lastmodified
                description
                camera
                version
              }
              intervals {
                __typename
                nextToken
              }
            }
            nextToken
          }
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUrlQuery>response.data.getUrl;
  }
  async ListUrls(
    filter?: ModelUrlFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUrlsQuery> {
    const statement = `query ListUrls($filter: ModelUrlFilterInput, $limit: Int, $nextToken: String) {
        listUrls(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            url
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
            recording {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              attachments {
                __typename
                nextToken
              }
              urls {
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
    return <ListUrlsQuery>response.data.listUrls;
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
            recording {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              attachments {
                __typename
                nextToken
              }
              urls {
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
          url {
            __typename
            id
            url
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
            recording {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              attachments {
                __typename
                nextToken
              }
              urls {
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
          intervals {
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
            url {
              __typename
              id
              url
              lastmodified
              description
              camera
              version
              redactions {
                __typename
                nextToken
              }
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
            }
            intervals {
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
            url {
              __typename
              id
              url
              lastmodified
              description
              camera
              version
              redactions {
                __typename
                nextToken
              }
              recording {
                __typename
                id
                interviewee
                interviewFinish
                interviewStart
                officerCollarNumber
                location
                unitId
                path
              }
            }
            intervals {
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
  async ListRedactionsInterval(
    filter?: ModelRedactionIntervalFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRedactionsIntervalQuery> {
    const statement = `query ListRedactionsInterval($filter: ModelRedactionIntervalFilterInput, $limit: Int, $nextToken: String) {
        listRedactionsInterval(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
              url {
                __typename
                id
                url
                lastmodified
                description
                camera
                version
              }
              intervals {
                __typename
                nextToken
              }
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
    return <ListRedactionsIntervalQuery>response.data.listRedactionsInterval;
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
  async ListBookmark(
    filter?: ModelBookmarkFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBookmarkQuery> {
    const statement = `query ListBookmark($filter: ModelBookmarkFilterInput, $limit: Int, $nextToken: String) {
        listBookmark(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            recording {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              attachments {
                __typename
                nextToken
              }
              urls {
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
    return <ListBookmarkQuery>response.data.listBookmark;
  }
  async GetTranscription(id: string): Promise<GetTranscriptionQuery> {
    const statement = `query GetTranscription($id: ID!) {
        getTranscription(id: $id) {
          __typename
          id
          submitTime
          transcriptionFileUrl
          status
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
            recording {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              attachments {
                __typename
                nextToken
              }
              urls {
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
          recording {
            __typename
            id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            location
            unitId
            path
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
            urls {
              __typename
              items {
                __typename
                id
                url
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
            recording {
              __typename
              id
              interviewee
              interviewFinish
              interviewStart
              officerCollarNumber
              location
              unitId
              path
              attachments {
                __typename
                nextToken
              }
              urls {
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
}
