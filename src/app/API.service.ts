/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateViqRecordingInput = {
  Id: string;
  interviewee?: string | null;
  interviewFinish?: string | null;
  interviewStart?: string | null;
  officerCollarNumber?: string | null;
  recordingUrl?: string | null;
  unitId?: string | null;
};

export type UpdateViqRecordingInput = {
  Id: string;
  interviewee?: string | null;
  interviewFinish?: string | null;
  interviewStart?: string | null;
  officerCollarNumber?: string | null;
  recordingUrl?: string | null;
  unitId?: string | null;
};

export type DeleteViqRecordingInput = {
  Id: string;
};

export type TableViqRecordingFilterInput = {
  Id?: TableStringFilterInput | null;
  interviewee?: TableStringFilterInput | null;
  interviewFinish?: TableStringFilterInput | null;
  interviewStart?: TableStringFilterInput | null;
  officerCollarNumber?: TableStringFilterInput | null;
  recordingUrl?: TableStringFilterInput | null;
  unitId?: TableStringFilterInput | null;
};

export type TableStringFilterInput = {
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

export type CreateViqRecordingMutation = {
  __typename: "ViqRecording";
  Id: string;
  interviewee: string | null;
  interviewFinish: string | null;
  interviewStart: string | null;
  officerCollarNumber: string | null;
  recordingUrl: string | null;
  unitId: string | null;
};

export type UpdateViqRecordingMutation = {
  __typename: "ViqRecording";
  Id: string;
  interviewee: string | null;
  interviewFinish: string | null;
  interviewStart: string | null;
  officerCollarNumber: string | null;
  recordingUrl: string | null;
  unitId: string | null;
};

export type DeleteViqRecordingMutation = {
  __typename: "ViqRecording";
  Id: string;
  interviewee: string | null;
  interviewFinish: string | null;
  interviewStart: string | null;
  officerCollarNumber: string | null;
  recordingUrl: string | null;
  unitId: string | null;
};

export type GetViqRecordingQuery = {
  __typename: "ViqRecording";
  Id: string;
  interviewee: string | null;
  interviewFinish: string | null;
  interviewStart: string | null;
  officerCollarNumber: string | null;
  recordingUrl: string | null;
  unitId: string | null;
};

export type ListViqRecordingsQuery = {
  __typename: "ViqRecordingConnection";
  items: Array<{
    __typename: "ViqRecording";
    Id: string;
    interviewee: string | null;
    interviewFinish: string | null;
    interviewStart: string | null;
    officerCollarNumber: string | null;
    recordingUrl: string | null;
    unitId: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateViqRecordingSubscription = {
  __typename: "ViqRecording";
  Id: string;
  interviewee: string | null;
  interviewFinish: string | null;
  interviewStart: string | null;
  officerCollarNumber: string | null;
  recordingUrl: string | null;
  unitId: string | null;
};

export type OnUpdateViqRecordingSubscription = {
  __typename: "ViqRecording";
  Id: string;
  interviewee: string | null;
  interviewFinish: string | null;
  interviewStart: string | null;
  officerCollarNumber: string | null;
  recordingUrl: string | null;
  unitId: string | null;
};

export type OnDeleteViqRecordingSubscription = {
  __typename: "ViqRecording";
  Id: string;
  interviewee: string | null;
  interviewFinish: string | null;
  interviewStart: string | null;
  officerCollarNumber: string | null;
  recordingUrl: string | null;
  unitId: string | null;
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
          Id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          recordingUrl
          unitId
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
          Id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          recordingUrl
          unitId
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
          Id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          recordingUrl
          unitId
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
  async GetViqRecording(Id: string): Promise<GetViqRecordingQuery> {
    const statement = `query GetViqRecording($Id: String!) {
        getViqRecording(Id: $Id) {
          __typename
          Id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          recordingUrl
          unitId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      Id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetViqRecordingQuery>response.data.getViqRecording;
  }
  async ListViqRecordings(
    filter?: TableViqRecordingFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListViqRecordingsQuery> {
    const statement = `query ListViqRecordings($filter: TableViqRecordingFilterInput, $limit: Int, $nextToken: String) {
        listViqRecordings(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            Id
            interviewee
            interviewFinish
            interviewStart
            officerCollarNumber
            recordingUrl
            unitId
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
  OnCreateViqRecordingListener: Observable<
    OnCreateViqRecordingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateViqRecording($Id: String, $interviewee: String, $interviewFinish: String, $interviewStart: String, $officerCollarNumber: String) {
        onCreateViqRecording(Id: $Id, interviewee: $interviewee, interviewFinish: $interviewFinish, interviewStart: $interviewStart, officerCollarNumber: $officerCollarNumber) {
          __typename
          Id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          recordingUrl
          unitId
        }
      }`
    )
  ) as Observable<OnCreateViqRecordingSubscription>;

  OnUpdateViqRecordingListener: Observable<
    OnUpdateViqRecordingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateViqRecording($Id: String, $interviewee: String, $interviewFinish: String, $interviewStart: String, $officerCollarNumber: String) {
        onUpdateViqRecording(Id: $Id, interviewee: $interviewee, interviewFinish: $interviewFinish, interviewStart: $interviewStart, officerCollarNumber: $officerCollarNumber) {
          __typename
          Id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          recordingUrl
          unitId
        }
      }`
    )
  ) as Observable<OnUpdateViqRecordingSubscription>;

  OnDeleteViqRecordingListener: Observable<
    OnDeleteViqRecordingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteViqRecording($Id: String, $interviewee: String, $interviewFinish: String, $interviewStart: String, $officerCollarNumber: String) {
        onDeleteViqRecording(Id: $Id, interviewee: $interviewee, interviewFinish: $interviewFinish, interviewStart: $interviewStart, officerCollarNumber: $officerCollarNumber) {
          __typename
          Id
          interviewee
          interviewFinish
          interviewStart
          officerCollarNumber
          recordingUrl
          unitId
        }
      }`
    )
  ) as Observable<OnDeleteViqRecordingSubscription>;
}
