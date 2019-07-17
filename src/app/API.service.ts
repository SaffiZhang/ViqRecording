/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateViqRecordingInput = {
  id?: string | null;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path?: string | null;
};

export type UpdateViqRecordingInput = {
  id: string;
  interviewee?: string | null;
  interviewFinish?: string | null;
  interviewStart?: string | null;
  officerCollarNumber?: string | null;
  location?: string | null;
  unitId?: string | null;
  path?: string | null;
};

export type DeleteViqRecordingInput = {
  id?: string | null;
};

export type CreateViqRecordingAttachmentInput = {
  id?: string | null;
  description: string;
  url: string;
  viqRecordingAttachmentViqRecordingId?: string | null;
};

export type UpdateViqRecordingAttachmentInput = {
  id: string;
  description?: string | null;
  url?: string | null;
  viqRecordingAttachmentViqRecordingId?: string | null;
};

export type DeleteViqRecordingAttachmentInput = {
  id?: string | null;
};

export type CreateViqRecordingUrlInput = {
  id?: string | null;
  url: string;
  lastmodified: string;
  description: string;
  camera: string;
  version: number;
  viqRecordingUrlViqRecordingId?: string | null;
};

export type UpdateViqRecordingUrlInput = {
  id: string;
  url?: string | null;
  lastmodified?: string | null;
  description?: string | null;
  camera?: string | null;
  version?: number | null;
  viqRecordingUrlViqRecordingId?: string | null;
};

export type DeleteViqRecordingUrlInput = {
  id?: string | null;
};

export type CreateViqRecordingLogInput = {
  id?: string | null;
  dateTime: string;
  description: string;
  viqRecordingLogViqRecordingId?: string | null;
};

export type UpdateViqRecordingLogInput = {
  id: string;
  dateTime?: string | null;
  description?: string | null;
  viqRecordingLogViqRecordingId?: string | null;
};

export type DeleteViqRecordingLogInput = {
  id?: string | null;
};

export type CreateViqRecordingRedactionInput = {
  id?: string | null;
  redactionVersion: number;
  startSecond: number;
  endSecond: number;
  type: string;
  viqRecordingRedactionViqRecordingUrlId?: string | null;
};

export type UpdateViqRecordingRedactionInput = {
  id: string;
  redactionVersion?: number | null;
  startSecond?: number | null;
  endSecond?: number | null;
  type?: string | null;
  viqRecordingRedactionViqRecordingUrlId?: string | null;
};

export type DeleteViqRecordingRedactionInput = {
  id?: string | null;
};

export type CreateViqRecordingTranscriptionInput = {
  id?: string | null;
  submitTime: string;
  viqRecordingTranscriptionViqRecordingId?: string | null;
};

export type UpdateViqRecordingTranscriptionInput = {
  id: string;
  submitTime?: string | null;
  viqRecordingTranscriptionViqRecordingId?: string | null;
};

export type DeleteViqRecordingTranscriptionInput = {
  id?: string | null;
};

export type ModelViqRecordingFilterInput = {
  id?: ModelStringFilterInput | null;
  interviewee?: ModelStringFilterInput | null;
  interviewFinish?: ModelStringFilterInput | null;
  interviewStart?: ModelStringFilterInput | null;
  officerCollarNumber?: ModelStringFilterInput | null;
  location?: ModelStringFilterInput | null;
  unitId?: ModelStringFilterInput | null;
  path?: ModelStringFilterInput | null;
  and?: Array<ModelViqRecordingFilterInput | null> | null;
  or?: Array<ModelViqRecordingFilterInput | null> | null;
  not?: ModelViqRecordingFilterInput | null;
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

export type ModelViqRecordingAttachmentFilterInput = {
  id?: ModelIDFilterInput | null;
  description?: ModelStringFilterInput | null;
  url?: ModelStringFilterInput | null;
  and?: Array<ModelViqRecordingAttachmentFilterInput | null> | null;
  or?: Array<ModelViqRecordingAttachmentFilterInput | null> | null;
  not?: ModelViqRecordingAttachmentFilterInput | null;
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

export type ModelViqRecordingUrlFilterInput = {
  id?: ModelIDFilterInput | null;
  url?: ModelStringFilterInput | null;
  lastmodified?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  camera?: ModelStringFilterInput | null;
  version?: ModelIntFilterInput | null;
  and?: Array<ModelViqRecordingUrlFilterInput | null> | null;
  or?: Array<ModelViqRecordingUrlFilterInput | null> | null;
  not?: ModelViqRecordingUrlFilterInput | null;
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

export type ModelViqRecordingLogFilterInput = {
  id?: ModelIDFilterInput | null;
  viqRecordingLogViqRecordingId:ModelStringFilterInput | null;
  dateTime?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  and?: Array<ModelViqRecordingLogFilterInput | null> | null;
  or?: Array<ModelViqRecordingLogFilterInput | null> | null;
  not?: ModelViqRecordingLogFilterInput | null;
};

export type ModelViqRecordingRedactionFilterInput = {
  id?: ModelIDFilterInput | null;
  redactionVersion?: ModelIntFilterInput | null;
  startSecond?: ModelIntFilterInput | null;
  endSecond?: ModelIntFilterInput | null;
  type?: ModelStringFilterInput | null;
  and?: Array<ModelViqRecordingRedactionFilterInput | null> | null;
  or?: Array<ModelViqRecordingRedactionFilterInput | null> | null;
  not?: ModelViqRecordingRedactionFilterInput | null;
};

export type ModelViqRecordingTranscriptionFilterInput = {
  id?: ModelIDFilterInput | null;
  submitTime?: ModelStringFilterInput | null;
  and?: Array<ModelViqRecordingTranscriptionFilterInput | null> | null;
  or?: Array<ModelViqRecordingTranscriptionFilterInput | null> | null;
  not?: ModelViqRecordingTranscriptionFilterInput | null;
};

export type CreateViqRecordingMutation = {
  __typename: "ViqRecording";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string | null;
  attachments: {
    __typename: "ModelViqRecordingAttachmentConnection";
    items: Array<{
      __typename: "ViqRecordingAttachment";
      id: string;
      description: string;
      url: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recordingUrls: {
    __typename: "ModelViqRecordingUrlConnection";
    items: Array<{
      __typename: "ViqRecordingUrl";
      id: string;
      url: string;
      lastmodified: string;
      description: string;
      camera: string;
      version: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  logs: {
    __typename: "ModelViqRecordingLogConnection";
    items: Array<{
      __typename: "ViqRecordingLog";
      id: string;
      dateTime: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transcriptions: {
    __typename: "ModelViqRecordingTranscriptionConnection";
    items: Array<{
      __typename: "ViqRecordingTranscription";
      id: string;
      submitTime: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateViqRecordingMutation = {
  __typename: "ViqRecording";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string | null;
  attachments: {
    __typename: "ModelViqRecordingAttachmentConnection";
    items: Array<{
      __typename: "ViqRecordingAttachment";
      id: string;
      description: string;
      url: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recordingUrls: {
    __typename: "ModelViqRecordingUrlConnection";
    items: Array<{
      __typename: "ViqRecordingUrl";
      id: string;
      url: string;
      lastmodified: string;
      description: string;
      camera: string;
      version: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  logs: {
    __typename: "ModelViqRecordingLogConnection";
    items: Array<{
      __typename: "ViqRecordingLog";
      id: string;
      dateTime: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transcriptions: {
    __typename: "ModelViqRecordingTranscriptionConnection";
    items: Array<{
      __typename: "ViqRecordingTranscription";
      id: string;
      submitTime: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteViqRecordingMutation = {
  __typename: "ViqRecording";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string | null;
  attachments: {
    __typename: "ModelViqRecordingAttachmentConnection";
    items: Array<{
      __typename: "ViqRecordingAttachment";
      id: string;
      description: string;
      url: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recordingUrls: {
    __typename: "ModelViqRecordingUrlConnection";
    items: Array<{
      __typename: "ViqRecordingUrl";
      id: string;
      url: string;
      lastmodified: string;
      description: string;
      camera: string;
      version: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  logs: {
    __typename: "ModelViqRecordingLogConnection";
    items: Array<{
      __typename: "ViqRecordingLog";
      id: string;
      dateTime: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transcriptions: {
    __typename: "ModelViqRecordingTranscriptionConnection";
    items: Array<{
      __typename: "ViqRecordingTranscription";
      id: string;
      submitTime: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateViqRecordingAttachmentMutation = {
  __typename: "ViqRecordingAttachment";
  id: string;
  description: string;
  url: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateViqRecordingAttachmentMutation = {
  __typename: "ViqRecordingAttachment";
  id: string;
  description: string;
  url: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteViqRecordingAttachmentMutation = {
  __typename: "ViqRecordingAttachment";
  id: string;
  description: string;
  url: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateViqRecordingUrlMutation = {
  __typename: "ViqRecordingUrl";
  id: string;
  url: string;
  lastmodified: string;
  description: string;
  camera: string;
  version: number;
  redactions: {
    __typename: "ModelViqRecordingRedactionConnection";
    items: Array<{
      __typename: "ViqRecordingRedaction";
      id: string;
      redactionVersion: number;
      startSecond: number;
      endSecond: number;
      type: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateViqRecordingUrlMutation = {
  __typename: "ViqRecordingUrl";
  id: string;
  url: string;
  lastmodified: string;
  description: string;
  camera: string;
  version: number;
  redactions: {
    __typename: "ModelViqRecordingRedactionConnection";
    items: Array<{
      __typename: "ViqRecordingRedaction";
      id: string;
      redactionVersion: number;
      startSecond: number;
      endSecond: number;
      type: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteViqRecordingUrlMutation = {
  __typename: "ViqRecordingUrl";
  id: string;
  url: string;
  lastmodified: string;
  description: string;
  camera: string;
  version: number;
  redactions: {
    __typename: "ModelViqRecordingRedactionConnection";
    items: Array<{
      __typename: "ViqRecordingRedaction";
      id: string;
      redactionVersion: number;
      startSecond: number;
      endSecond: number;
      type: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateViqRecordingLogMutation = {
  __typename: "ViqRecordingLog";
  id: string;
  dateTime: string;
  description: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateViqRecordingLogMutation = {
  __typename: "ViqRecordingLog";
  id: string;
  dateTime: string;
  description: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteViqRecordingLogMutation = {
  __typename: "ViqRecordingLog";
  id: string;
  dateTime: string;
  description: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type CreateViqRecordingRedactionMutation = {
  __typename: "ViqRecordingRedaction";
  id: string;
  redactionVersion: number;
  startSecond: number;
  endSecond: number;
  type: string;
  viqRecordingUrl: {
    __typename: "ViqRecordingUrl";
    id: string;
    url: string;
    lastmodified: string;
    description: string;
    camera: string;
    version: number;
    redactions: {
      __typename: "ModelViqRecordingRedactionConnection";
      nextToken: string | null;
    } | null;
    viqRecording: {
      __typename: "ViqRecording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string | null;
    } | null;
  } | null;
};

export type UpdateViqRecordingRedactionMutation = {
  __typename: "ViqRecordingRedaction";
  id: string;
  redactionVersion: number;
  startSecond: number;
  endSecond: number;
  type: string;
  viqRecordingUrl: {
    __typename: "ViqRecordingUrl";
    id: string;
    url: string;
    lastmodified: string;
    description: string;
    camera: string;
    version: number;
    redactions: {
      __typename: "ModelViqRecordingRedactionConnection";
      nextToken: string | null;
    } | null;
    viqRecording: {
      __typename: "ViqRecording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string | null;
    } | null;
  } | null;
};

export type DeleteViqRecordingRedactionMutation = {
  __typename: "ViqRecordingRedaction";
  id: string;
  redactionVersion: number;
  startSecond: number;
  endSecond: number;
  type: string;
  viqRecordingUrl: {
    __typename: "ViqRecordingUrl";
    id: string;
    url: string;
    lastmodified: string;
    description: string;
    camera: string;
    version: number;
    redactions: {
      __typename: "ModelViqRecordingRedactionConnection";
      nextToken: string | null;
    } | null;
    viqRecording: {
      __typename: "ViqRecording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string | null;
    } | null;
  } | null;
};

export type CreateViqRecordingTranscriptionMutation = {
  __typename: "ViqRecordingTranscription";
  id: string;
  submitTime: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateViqRecordingTranscriptionMutation = {
  __typename: "ViqRecordingTranscription";
  id: string;
  submitTime: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteViqRecordingTranscriptionMutation = {
  __typename: "ViqRecordingTranscription";
  id: string;
  submitTime: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type GetViqRecordingQuery = {
  __typename: "ViqRecording";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string | null;
  attachments: {
    __typename: "ModelViqRecordingAttachmentConnection";
    items: Array<{
      __typename: "ViqRecordingAttachment";
      id: string;
      description: string;
      url: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recordingUrls: {
    __typename: "ModelViqRecordingUrlConnection";
    items: Array<{
      __typename: "ViqRecordingUrl";
      id: string;
      url: string;
      lastmodified: string;
      description: string;
      camera: string;
      version: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  logs: {
    __typename: "ModelViqRecordingLogConnection";
    items: Array<{
      __typename: "ViqRecordingLog";
      id: string;
      dateTime: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transcriptions: {
    __typename: "ModelViqRecordingTranscriptionConnection";
    items: Array<{
      __typename: "ViqRecordingTranscription";
      id: string;
      submitTime: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListViqRecordingsQuery = {
  __typename: "ModelViqRecordingConnection";
  items: Array<{
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetViqRecordingAttachmentQuery = {
  __typename: "ViqRecordingAttachment";
  id: string;
  description: string;
  url: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListViqRecordingAttachmentsQuery = {
  __typename: "ModelViqRecordingAttachmentConnection";
  items: Array<{
    __typename: "ViqRecordingAttachment";
    id: string;
    description: string;
    url: string;
    viqRecording: {
      __typename: "ViqRecording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetViqRecordingUrlQuery = {
  __typename: "ViqRecordingUrl";
  id: string;
  url: string;
  lastmodified: string;
  description: string;
  camera: string;
  version: number;
  redactions: {
    __typename: "ModelViqRecordingRedactionConnection";
    items: Array<{
      __typename: "ViqRecordingRedaction";
      id: string;
      redactionVersion: number;
      startSecond: number;
      endSecond: number;
      type: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListViqRecordingUrlsQuery = {
  __typename: "ModelViqRecordingUrlConnection";
  items: Array<{
    __typename: "ViqRecordingUrl";
    id: string;
    url: string;
    lastmodified: string;
    description: string;
    camera: string;
    version: number;
    redactions: {
      __typename: "ModelViqRecordingRedactionConnection";
      nextToken: string | null;
    } | null;
    viqRecording: {
      __typename: "ViqRecording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetViqRecordingLogQuery = {
  __typename: "ViqRecordingLog";
  id: string;
  dateTime: string;
  description: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListViqRecordingLogsQuery = {
  __typename: "ModelViqRecordingLogConnection";
  items: Array<{
    __typename: "ViqRecordingLog";
    id: string;
    dateTime: string;
    description: string;
    viqRecording: {
      __typename: "ViqRecording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetViqRecordingRedactionQuery = {
  __typename: "ViqRecordingRedaction";
  id: string;
  redactionVersion: number;
  startSecond: number;
  endSecond: number;
  type: string;
  viqRecordingUrl: {
    __typename: "ViqRecordingUrl";
    id: string;
    url: string;
    lastmodified: string;
    description: string;
    camera: string;
    version: number;
    redactions: {
      __typename: "ModelViqRecordingRedactionConnection";
      nextToken: string | null;
    } | null;
    viqRecording: {
      __typename: "ViqRecording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string | null;
    } | null;
  } | null;
};

export type ListViqRecordingRedactionsQuery = {
  __typename: "ModelViqRecordingRedactionConnection";
  items: Array<{
    __typename: "ViqRecordingRedaction";
    id: string;
    redactionVersion: number;
    startSecond: number;
    endSecond: number;
    type: string;
    viqRecordingUrl: {
      __typename: "ViqRecordingUrl";
      id: string;
      url: string;
      lastmodified: string;
      description: string;
      camera: string;
      version: number;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetViqRecordingTranscriptionQuery = {
  __typename: "ViqRecordingTranscription";
  id: string;
  submitTime: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListViqRecordingTranscriptionsQuery = {
  __typename: "ModelViqRecordingTranscriptionConnection";
  items: Array<{
    __typename: "ViqRecordingTranscription";
    id: string;
    submitTime: string;
    viqRecording: {
      __typename: "ViqRecording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateViqRecordingSubscription = {
  __typename: "ViqRecording";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string | null;
  attachments: {
    __typename: "ModelViqRecordingAttachmentConnection";
    items: Array<{
      __typename: "ViqRecordingAttachment";
      id: string;
      description: string;
      url: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recordingUrls: {
    __typename: "ModelViqRecordingUrlConnection";
    items: Array<{
      __typename: "ViqRecordingUrl";
      id: string;
      url: string;
      lastmodified: string;
      description: string;
      camera: string;
      version: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  logs: {
    __typename: "ModelViqRecordingLogConnection";
    items: Array<{
      __typename: "ViqRecordingLog";
      id: string;
      dateTime: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transcriptions: {
    __typename: "ModelViqRecordingTranscriptionConnection";
    items: Array<{
      __typename: "ViqRecordingTranscription";
      id: string;
      submitTime: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateViqRecordingSubscription = {
  __typename: "ViqRecording";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string | null;
  attachments: {
    __typename: "ModelViqRecordingAttachmentConnection";
    items: Array<{
      __typename: "ViqRecordingAttachment";
      id: string;
      description: string;
      url: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recordingUrls: {
    __typename: "ModelViqRecordingUrlConnection";
    items: Array<{
      __typename: "ViqRecordingUrl";
      id: string;
      url: string;
      lastmodified: string;
      description: string;
      camera: string;
      version: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  logs: {
    __typename: "ModelViqRecordingLogConnection";
    items: Array<{
      __typename: "ViqRecordingLog";
      id: string;
      dateTime: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transcriptions: {
    __typename: "ModelViqRecordingTranscriptionConnection";
    items: Array<{
      __typename: "ViqRecordingTranscription";
      id: string;
      submitTime: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteViqRecordingSubscription = {
  __typename: "ViqRecording";
  id: string;
  interviewee: string;
  interviewFinish: string;
  interviewStart: string;
  officerCollarNumber: string;
  location: string;
  unitId: string;
  path: string | null;
  attachments: {
    __typename: "ModelViqRecordingAttachmentConnection";
    items: Array<{
      __typename: "ViqRecordingAttachment";
      id: string;
      description: string;
      url: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  recordingUrls: {
    __typename: "ModelViqRecordingUrlConnection";
    items: Array<{
      __typename: "ViqRecordingUrl";
      id: string;
      url: string;
      lastmodified: string;
      description: string;
      camera: string;
      version: number;
    } | null> | null;
    nextToken: string | null;
  } | null;
  logs: {
    __typename: "ModelViqRecordingLogConnection";
    items: Array<{
      __typename: "ViqRecordingLog";
      id: string;
      dateTime: string;
      description: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  transcriptions: {
    __typename: "ModelViqRecordingTranscriptionConnection";
    items: Array<{
      __typename: "ViqRecordingTranscription";
      id: string;
      submitTime: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateViqRecordingAttachmentSubscription = {
  __typename: "ViqRecordingAttachment";
  id: string;
  description: string;
  url: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateViqRecordingAttachmentSubscription = {
  __typename: "ViqRecordingAttachment";
  id: string;
  description: string;
  url: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteViqRecordingAttachmentSubscription = {
  __typename: "ViqRecordingAttachment";
  id: string;
  description: string;
  url: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateViqRecordingUrlSubscription = {
  __typename: "ViqRecordingUrl";
  id: string;
  url: string;
  lastmodified: string;
  description: string;
  camera: string;
  version: number;
  redactions: {
    __typename: "ModelViqRecordingRedactionConnection";
    items: Array<{
      __typename: "ViqRecordingRedaction";
      id: string;
      redactionVersion: number;
      startSecond: number;
      endSecond: number;
      type: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateViqRecordingUrlSubscription = {
  __typename: "ViqRecordingUrl";
  id: string;
  url: string;
  lastmodified: string;
  description: string;
  camera: string;
  version: number;
  redactions: {
    __typename: "ModelViqRecordingRedactionConnection";
    items: Array<{
      __typename: "ViqRecordingRedaction";
      id: string;
      redactionVersion: number;
      startSecond: number;
      endSecond: number;
      type: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteViqRecordingUrlSubscription = {
  __typename: "ViqRecordingUrl";
  id: string;
  url: string;
  lastmodified: string;
  description: string;
  camera: string;
  version: number;
  redactions: {
    __typename: "ModelViqRecordingRedactionConnection";
    items: Array<{
      __typename: "ViqRecordingRedaction";
      id: string;
      redactionVersion: number;
      startSecond: number;
      endSecond: number;
      type: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateViqRecordingLogSubscription = {
  __typename: "ViqRecordingLog";
  id: string;
  dateTime: string;
  description: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateViqRecordingLogSubscription = {
  __typename: "ViqRecordingLog";
  id: string;
  dateTime: string;
  description: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteViqRecordingLogSubscription = {
  __typename: "ViqRecordingLog";
  id: string;
  dateTime: string;
  description: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnCreateViqRecordingRedactionSubscription = {
  __typename: "ViqRecordingRedaction";
  id: string;
  redactionVersion: number;
  startSecond: number;
  endSecond: number;
  type: string;
  viqRecordingUrl: {
    __typename: "ViqRecordingUrl";
    id: string;
    url: string;
    lastmodified: string;
    description: string;
    camera: string;
    version: number;
    redactions: {
      __typename: "ModelViqRecordingRedactionConnection";
      nextToken: string | null;
    } | null;
    viqRecording: {
      __typename: "ViqRecording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string | null;
    } | null;
  } | null;
};

export type OnUpdateViqRecordingRedactionSubscription = {
  __typename: "ViqRecordingRedaction";
  id: string;
  redactionVersion: number;
  startSecond: number;
  endSecond: number;
  type: string;
  viqRecordingUrl: {
    __typename: "ViqRecordingUrl";
    id: string;
    url: string;
    lastmodified: string;
    description: string;
    camera: string;
    version: number;
    redactions: {
      __typename: "ModelViqRecordingRedactionConnection";
      nextToken: string | null;
    } | null;
    viqRecording: {
      __typename: "ViqRecording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string | null;
    } | null;
  } | null;
};

export type OnDeleteViqRecordingRedactionSubscription = {
  __typename: "ViqRecordingRedaction";
  id: string;
  redactionVersion: number;
  startSecond: number;
  endSecond: number;
  type: string;
  viqRecordingUrl: {
    __typename: "ViqRecordingUrl";
    id: string;
    url: string;
    lastmodified: string;
    description: string;
    camera: string;
    version: number;
    redactions: {
      __typename: "ModelViqRecordingRedactionConnection";
      nextToken: string | null;
    } | null;
    viqRecording: {
      __typename: "ViqRecording";
      id: string;
      interviewee: string;
      interviewFinish: string;
      interviewStart: string;
      officerCollarNumber: string;
      location: string;
      unitId: string;
      path: string | null;
    } | null;
  } | null;
};

export type OnCreateViqRecordingTranscriptionSubscription = {
  __typename: "ViqRecordingTranscription";
  id: string;
  submitTime: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateViqRecordingTranscriptionSubscription = {
  __typename: "ViqRecordingTranscription";
  id: string;
  submitTime: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteViqRecordingTranscriptionSubscription = {
  __typename: "ViqRecordingTranscription";
  id: string;
  submitTime: string;
  viqRecording: {
    __typename: "ViqRecording";
    id: string;
    interviewee: string;
    interviewFinish: string;
    interviewStart: string;
    officerCollarNumber: string;
    location: string;
    unitId: string;
    path: string | null;
    attachments: {
      __typename: "ModelViqRecordingAttachmentConnection";
      nextToken: string | null;
    } | null;
    recordingUrls: {
      __typename: "ModelViqRecordingUrlConnection";
      nextToken: string | null;
    } | null;
    logs: {
      __typename: "ModelViqRecordingLogConnection";
      nextToken: string | null;
    } | null;
    transcriptions: {
      __typename: "ModelViqRecordingTranscriptionConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateViqRecording(
    input: CreateViqRecordingInput
  ): Promise<CreateViqRecordingMutation> {
    const statement = `mutation CreateViqRecording($input: CreateViqRecordingInput!) {
        createViqRecording(input: $input) {
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
            }
            nextToken
          }
          recordingUrls {
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
            }
            nextToken
          }
          transcriptions {
            __typename
            items {
              __typename
              id
              submitTime
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
    return <CreateViqRecordingMutation>response.data.createViqRecording;
  }
  async UpdateViqRecording(
    input: UpdateViqRecordingInput
  ): Promise<UpdateViqRecordingMutation> {
    const statement = `mutation UpdateViqRecording($input: UpdateViqRecordingInput!) {
        updateViqRecording(input: $input) {
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
            }
            nextToken
          }
          recordingUrls {
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
            }
            nextToken
          }
          transcriptions {
            __typename
            items {
              __typename
              id
              submitTime
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
    return <UpdateViqRecordingMutation>response.data.updateViqRecording;
  }
  async DeleteViqRecording(
    input: DeleteViqRecordingInput
  ): Promise<DeleteViqRecordingMutation> {
    const statement = `mutation DeleteViqRecording($input: DeleteViqRecordingInput!) {
        deleteViqRecording(input: $input) {
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
            }
            nextToken
          }
          recordingUrls {
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
            }
            nextToken
          }
          transcriptions {
            __typename
            items {
              __typename
              id
              submitTime
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
    return <DeleteViqRecordingMutation>response.data.deleteViqRecording;
  }
  async CreateViqRecordingAttachment(
    input: CreateViqRecordingAttachmentInput
  ): Promise<CreateViqRecordingAttachmentMutation> {
    const statement = `mutation CreateViqRecordingAttachment($input: CreateViqRecordingAttachmentInput!) {
        createViqRecordingAttachment(input: $input) {
          __typename
          id
          description
          url
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateViqRecordingAttachmentMutation>(
      response.data.createViqRecordingAttachment
    );
  }
  async UpdateViqRecordingAttachment(
    input: UpdateViqRecordingAttachmentInput
  ): Promise<UpdateViqRecordingAttachmentMutation> {
    const statement = `mutation UpdateViqRecordingAttachment($input: UpdateViqRecordingAttachmentInput!) {
        updateViqRecordingAttachment(input: $input) {
          __typename
          id
          description
          url
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateViqRecordingAttachmentMutation>(
      response.data.updateViqRecordingAttachment
    );
  }
  async DeleteViqRecordingAttachment(
    input: DeleteViqRecordingAttachmentInput
  ): Promise<DeleteViqRecordingAttachmentMutation> {
    const statement = `mutation DeleteViqRecordingAttachment($input: DeleteViqRecordingAttachmentInput!) {
        deleteViqRecordingAttachment(input: $input) {
          __typename
          id
          description
          url
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteViqRecordingAttachmentMutation>(
      response.data.deleteViqRecordingAttachment
    );
  }
  async CreateViqRecordingUrl(
    input: CreateViqRecordingUrlInput
  ): Promise<CreateViqRecordingUrlMutation> {
    const statement = `mutation CreateViqRecordingUrl($input: CreateViqRecordingUrlInput!) {
        createViqRecordingUrl(input: $input) {
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
              startSecond
              endSecond
              type
            }
            nextToken
          }
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateViqRecordingUrlMutation>response.data.createViqRecordingUrl;
  }
  async UpdateViqRecordingUrl(
    input: UpdateViqRecordingUrlInput
  ): Promise<UpdateViqRecordingUrlMutation> {
    const statement = `mutation UpdateViqRecordingUrl($input: UpdateViqRecordingUrlInput!) {
        updateViqRecordingUrl(input: $input) {
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
              startSecond
              endSecond
              type
            }
            nextToken
          }
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateViqRecordingUrlMutation>response.data.updateViqRecordingUrl;
  }
  async DeleteViqRecordingUrl(
    input: DeleteViqRecordingUrlInput
  ): Promise<DeleteViqRecordingUrlMutation> {
    const statement = `mutation DeleteViqRecordingUrl($input: DeleteViqRecordingUrlInput!) {
        deleteViqRecordingUrl(input: $input) {
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
              startSecond
              endSecond
              type
            }
            nextToken
          }
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteViqRecordingUrlMutation>response.data.deleteViqRecordingUrl;
  }
  async CreateViqRecordingLog(
    input: CreateViqRecordingLogInput
  ): Promise<CreateViqRecordingLogMutation> {
    const statement = `mutation CreateViqRecordingLog($input: CreateViqRecordingLogInput!) {
        createViqRecordingLog(input: $input) {
          __typename
          id
          dateTime
          description
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateViqRecordingLogMutation>response.data.createViqRecordingLog;
  }
  async UpdateViqRecordingLog(
    input: UpdateViqRecordingLogInput
  ): Promise<UpdateViqRecordingLogMutation> {
    const statement = `mutation UpdateViqRecordingLog($input: UpdateViqRecordingLogInput!) {
        updateViqRecordingLog(input: $input) {
          __typename
          id
          dateTime
          description
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateViqRecordingLogMutation>response.data.updateViqRecordingLog;
  }
  async DeleteViqRecordingLog(
    input: DeleteViqRecordingLogInput
  ): Promise<DeleteViqRecordingLogMutation> {
    const statement = `mutation DeleteViqRecordingLog($input: DeleteViqRecordingLogInput!) {
        deleteViqRecordingLog(input: $input) {
          __typename
          id
          dateTime
          description
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteViqRecordingLogMutation>response.data.deleteViqRecordingLog;
  }
  async CreateViqRecordingRedaction(
    input: CreateViqRecordingRedactionInput
  ): Promise<CreateViqRecordingRedactionMutation> {
    const statement = `mutation CreateViqRecordingRedaction($input: CreateViqRecordingRedactionInput!) {
        createViqRecordingRedaction(input: $input) {
          __typename
          id
          redactionVersion
          startSecond
          endSecond
          type
          viqRecordingUrl {
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
            viqRecording {
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateViqRecordingRedactionMutation>(
      response.data.createViqRecordingRedaction
    );
  }
  async UpdateViqRecordingRedaction(
    input: UpdateViqRecordingRedactionInput
  ): Promise<UpdateViqRecordingRedactionMutation> {
    const statement = `mutation UpdateViqRecordingRedaction($input: UpdateViqRecordingRedactionInput!) {
        updateViqRecordingRedaction(input: $input) {
          __typename
          id
          redactionVersion
          startSecond
          endSecond
          type
          viqRecordingUrl {
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
            viqRecording {
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateViqRecordingRedactionMutation>(
      response.data.updateViqRecordingRedaction
    );
  }
  async DeleteViqRecordingRedaction(
    input: DeleteViqRecordingRedactionInput
  ): Promise<DeleteViqRecordingRedactionMutation> {
    const statement = `mutation DeleteViqRecordingRedaction($input: DeleteViqRecordingRedactionInput!) {
        deleteViqRecordingRedaction(input: $input) {
          __typename
          id
          redactionVersion
          startSecond
          endSecond
          type
          viqRecordingUrl {
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
            viqRecording {
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteViqRecordingRedactionMutation>(
      response.data.deleteViqRecordingRedaction
    );
  }
  async CreateViqRecordingTranscription(
    input: CreateViqRecordingTranscriptionInput
  ): Promise<CreateViqRecordingTranscriptionMutation> {
    const statement = `mutation CreateViqRecordingTranscription($input: CreateViqRecordingTranscriptionInput!) {
        createViqRecordingTranscription(input: $input) {
          __typename
          id
          submitTime
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateViqRecordingTranscriptionMutation>(
      response.data.createViqRecordingTranscription
    );
  }
  async UpdateViqRecordingTranscription(
    input: UpdateViqRecordingTranscriptionInput
  ): Promise<UpdateViqRecordingTranscriptionMutation> {
    const statement = `mutation UpdateViqRecordingTranscription($input: UpdateViqRecordingTranscriptionInput!) {
        updateViqRecordingTranscription(input: $input) {
          __typename
          id
          submitTime
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateViqRecordingTranscriptionMutation>(
      response.data.updateViqRecordingTranscription
    );
  }
  async DeleteViqRecordingTranscription(
    input: DeleteViqRecordingTranscriptionInput
  ): Promise<DeleteViqRecordingTranscriptionMutation> {
    const statement = `mutation DeleteViqRecordingTranscription($input: DeleteViqRecordingTranscriptionInput!) {
        deleteViqRecordingTranscription(input: $input) {
          __typename
          id
          submitTime
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteViqRecordingTranscriptionMutation>(
      response.data.deleteViqRecordingTranscription
    );
  }
  async GetViqRecording(id: string): Promise<GetViqRecordingQuery> {
    const statement = `query GetViqRecording($id: ID!) {
        getViqRecording(id: $id) {
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
            }
            nextToken
          }
          recordingUrls {
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
            }
            nextToken
          }
          transcriptions {
            __typename
            items {
              __typename
              id
              submitTime
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
    return <GetViqRecordingQuery>response.data.getViqRecording;
  }
  async ListViqRecordings(
    filter?: ModelViqRecordingFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListViqRecordingsQuery> {
    const statement = `query ListViqRecordings($filter: ModelViqRecordingFilterInput, $limit: Int, $nextToken: String) {
        listViqRecordings(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
              nextToken
            }
            recordingUrls {
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
    return <ListViqRecordingsQuery>response.data.listViqRecordings;
  }
  async GetViqRecordingAttachment(
    id: string
  ): Promise<GetViqRecordingAttachmentQuery> {
    const statement = `query GetViqRecordingAttachment($id: ID!) {
        getViqRecordingAttachment(id: $id) {
          __typename
          id
          description
          url
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetViqRecordingAttachmentQuery>(
      response.data.getViqRecordingAttachment
    );
  }
  async ListViqRecordingAttachments(
    filter?: ModelViqRecordingAttachmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListViqRecordingAttachmentsQuery> {
    const statement = `query ListViqRecordingAttachments($filter: ModelViqRecordingAttachmentFilterInput, $limit: Int, $nextToken: String) {
        listViqRecordingAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            description
            url
            viqRecording {
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
    return <ListViqRecordingAttachmentsQuery>(
      response.data.listViqRecordingAttachments
    );
  }
  async GetViqRecordingUrl(id: string): Promise<GetViqRecordingUrlQuery> {
    const statement = `query GetViqRecordingUrl($id: ID!) {
        getViqRecordingUrl(id: $id) {
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
              startSecond
              endSecond
              type
            }
            nextToken
          }
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetViqRecordingUrlQuery>response.data.getViqRecordingUrl;
  }
  async ListViqRecordingUrls(
    filter?: ModelViqRecordingUrlFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListViqRecordingUrlsQuery> {
    const statement = `query ListViqRecordingUrls($filter: ModelViqRecordingUrlFilterInput, $limit: Int, $nextToken: String) {
        listViqRecordingUrls(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            viqRecording {
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
    return <ListViqRecordingUrlsQuery>response.data.listViqRecordingUrls;
  }
  async GetViqRecordingLog(id: string): Promise<GetViqRecordingLogQuery> {
    const statement = `query GetViqRecordingLog($id: ID!) {
        getViqRecordingLog(id: $id) {
          __typename
          id
          dateTime
          description
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetViqRecordingLogQuery>response.data.getViqRecordingLog;
  }
  async ListViqRecordingLogs(
    filter?: ModelViqRecordingLogFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListViqRecordingLogsQuery> {
    const statement = `query ListViqRecordingLogs($filter: ModelViqRecordingLogFilterInput, $limit: Int, $nextToken: String) {
        listViqRecordingLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            dateTime
            description
            viqRecording {
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
    return <ListViqRecordingLogsQuery>response.data.listViqRecordingLogs;
  }
  async GetViqRecordingRedaction(
    id: string
  ): Promise<GetViqRecordingRedactionQuery> {
    const statement = `query GetViqRecordingRedaction($id: ID!) {
        getViqRecordingRedaction(id: $id) {
          __typename
          id
          redactionVersion
          startSecond
          endSecond
          type
          viqRecordingUrl {
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
            viqRecording {
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
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetViqRecordingRedactionQuery>(
      response.data.getViqRecordingRedaction
    );
  }
  async ListViqRecordingRedactions(
    filter?: ModelViqRecordingRedactionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListViqRecordingRedactionsQuery> {
    const statement = `query ListViqRecordingRedactions($filter: ModelViqRecordingRedactionFilterInput, $limit: Int, $nextToken: String) {
        listViqRecordingRedactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            redactionVersion
            startSecond
            endSecond
            type
            viqRecordingUrl {
              __typename
              id
              url
              lastmodified
              description
              camera
              version
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
    return <ListViqRecordingRedactionsQuery>(
      response.data.listViqRecordingRedactions
    );
  }
  async GetViqRecordingTranscription(
    id: string
  ): Promise<GetViqRecordingTranscriptionQuery> {
    const statement = `query GetViqRecordingTranscription($id: ID!) {
        getViqRecordingTranscription(id: $id) {
          __typename
          id
          submitTime
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetViqRecordingTranscriptionQuery>(
      response.data.getViqRecordingTranscription
    );
  }
  async ListViqRecordingTranscriptions(
    filter?: ModelViqRecordingTranscriptionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListViqRecordingTranscriptionsQuery> {
    const statement = `query ListViqRecordingTranscriptions($filter: ModelViqRecordingTranscriptionFilterInput, $limit: Int, $nextToken: String) {
        listViqRecordingTranscriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            submitTime
            viqRecording {
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
    return <ListViqRecordingTranscriptionsQuery>(
      response.data.listViqRecordingTranscriptions
    );
  }
  OnCreateViqRecordingListener: Observable<
    OnCreateViqRecordingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateViqRecording {
        onCreateViqRecording {
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
            }
            nextToken
          }
          recordingUrls {
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
            }
            nextToken
          }
          transcriptions {
            __typename
            items {
              __typename
              id
              submitTime
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateViqRecordingSubscription>;

  OnUpdateViqRecordingListener: Observable<
    OnUpdateViqRecordingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateViqRecording {
        onUpdateViqRecording {
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
            }
            nextToken
          }
          recordingUrls {
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
            }
            nextToken
          }
          transcriptions {
            __typename
            items {
              __typename
              id
              submitTime
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateViqRecordingSubscription>;

  OnDeleteViqRecordingListener: Observable<
    OnDeleteViqRecordingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteViqRecording {
        onDeleteViqRecording {
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
            }
            nextToken
          }
          recordingUrls {
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
            }
            nextToken
          }
          transcriptions {
            __typename
            items {
              __typename
              id
              submitTime
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteViqRecordingSubscription>;

  OnCreateViqRecordingAttachmentListener: Observable<
    OnCreateViqRecordingAttachmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateViqRecordingAttachment {
        onCreateViqRecordingAttachment {
          __typename
          id
          description
          url
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`
    )
  ) as Observable<OnCreateViqRecordingAttachmentSubscription>;

  OnUpdateViqRecordingAttachmentListener: Observable<
    OnUpdateViqRecordingAttachmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateViqRecordingAttachment {
        onUpdateViqRecordingAttachment {
          __typename
          id
          description
          url
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`
    )
  ) as Observable<OnUpdateViqRecordingAttachmentSubscription>;

  OnDeleteViqRecordingAttachmentListener: Observable<
    OnDeleteViqRecordingAttachmentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteViqRecordingAttachment {
        onDeleteViqRecordingAttachment {
          __typename
          id
          description
          url
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`
    )
  ) as Observable<OnDeleteViqRecordingAttachmentSubscription>;

  OnCreateViqRecordingUrlListener: Observable<
    OnCreateViqRecordingUrlSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateViqRecordingUrl {
        onCreateViqRecordingUrl {
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
              startSecond
              endSecond
              type
            }
            nextToken
          }
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`
    )
  ) as Observable<OnCreateViqRecordingUrlSubscription>;

  OnUpdateViqRecordingUrlListener: Observable<
    OnUpdateViqRecordingUrlSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateViqRecordingUrl {
        onUpdateViqRecordingUrl {
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
              startSecond
              endSecond
              type
            }
            nextToken
          }
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`
    )
  ) as Observable<OnUpdateViqRecordingUrlSubscription>;

  OnDeleteViqRecordingUrlListener: Observable<
    OnDeleteViqRecordingUrlSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteViqRecordingUrl {
        onDeleteViqRecordingUrl {
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
              startSecond
              endSecond
              type
            }
            nextToken
          }
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`
    )
  ) as Observable<OnDeleteViqRecordingUrlSubscription>;

  OnCreateViqRecordingLogListener: Observable<
    OnCreateViqRecordingLogSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateViqRecordingLog {
        onCreateViqRecordingLog {
          __typename
          id
          dateTime
          description
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`
    )
  ) as Observable<OnCreateViqRecordingLogSubscription>;

  OnUpdateViqRecordingLogListener: Observable<
    OnUpdateViqRecordingLogSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateViqRecordingLog {
        onUpdateViqRecordingLog {
          __typename
          id
          dateTime
          description
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`
    )
  ) as Observable<OnUpdateViqRecordingLogSubscription>;

  OnDeleteViqRecordingLogListener: Observable<
    OnDeleteViqRecordingLogSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteViqRecordingLog {
        onDeleteViqRecordingLog {
          __typename
          id
          dateTime
          description
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`
    )
  ) as Observable<OnDeleteViqRecordingLogSubscription>;

  OnCreateViqRecordingRedactionListener: Observable<
    OnCreateViqRecordingRedactionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateViqRecordingRedaction {
        onCreateViqRecordingRedaction {
          __typename
          id
          redactionVersion
          startSecond
          endSecond
          type
          viqRecordingUrl {
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
            viqRecording {
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
        }
      }`
    )
  ) as Observable<OnCreateViqRecordingRedactionSubscription>;

  OnUpdateViqRecordingRedactionListener: Observable<
    OnUpdateViqRecordingRedactionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateViqRecordingRedaction {
        onUpdateViqRecordingRedaction {
          __typename
          id
          redactionVersion
          startSecond
          endSecond
          type
          viqRecordingUrl {
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
            viqRecording {
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
        }
      }`
    )
  ) as Observable<OnUpdateViqRecordingRedactionSubscription>;

  OnDeleteViqRecordingRedactionListener: Observable<
    OnDeleteViqRecordingRedactionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteViqRecordingRedaction {
        onDeleteViqRecordingRedaction {
          __typename
          id
          redactionVersion
          startSecond
          endSecond
          type
          viqRecordingUrl {
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
            viqRecording {
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
        }
      }`
    )
  ) as Observable<OnDeleteViqRecordingRedactionSubscription>;

  OnCreateViqRecordingTranscriptionListener: Observable<
    OnCreateViqRecordingTranscriptionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateViqRecordingTranscription {
        onCreateViqRecordingTranscription {
          __typename
          id
          submitTime
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`
    )
  ) as Observable<OnCreateViqRecordingTranscriptionSubscription>;

  OnUpdateViqRecordingTranscriptionListener: Observable<
    OnUpdateViqRecordingTranscriptionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateViqRecordingTranscription {
        onUpdateViqRecordingTranscription {
          __typename
          id
          submitTime
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`
    )
  ) as Observable<OnUpdateViqRecordingTranscriptionSubscription>;

  OnDeleteViqRecordingTranscriptionListener: Observable<
    OnDeleteViqRecordingTranscriptionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteViqRecordingTranscription {
        onDeleteViqRecordingTranscription {
          __typename
          id
          submitTime
          viqRecording {
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
            recordingUrls {
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
          }
        }
      }`
    )
  ) as Observable<OnDeleteViqRecordingTranscriptionSubscription>;
}
