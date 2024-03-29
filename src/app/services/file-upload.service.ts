import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import {Inject, Injectable} from '@angular/core';
import {S3_PARAMS} from './tokens';
import {S3Params} from './s3-params';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(@Inject(S3_PARAMS) private s3Params: S3Params) {

  }

  public uploadFile(file, folder = '', cb, errCb = null) {
    const contentType = file.type;
    const bucket = new S3(
      {
        accessKeyId: this.s3Params.accessKeyId,
        secretAccessKey: this.s3Params.secreatAccessKey,
        region: this.s3Params.region
      }
    );
    const parts = file.name.split('.');
    const ext = parts[parts.length - 1];
    const fn = folder + '.' + ext;
    const params = {
      Bucket: this.s3Params.bucket,
      Key: fn.toLowerCase(), //file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    };
    bucket.upload(params, (err, data) => {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        if (errCb) {
          errCb(err);
        }
        return false;
      }
      console.log('Successfully uploaded file.', data);
      if (cb) {
        cb(data);
      }
      return true;
    });
  }
}
