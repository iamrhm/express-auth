import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export interface SessionInfo {
  accessToken: string;
  refreshToken: string;
}

export const SessionSchema = new Schema({
  accessToken: {
    type: String,
    required: true,
    unique: true,
  },
  refreshToken: {
    type: String,
    unique: true,
  },
});

export const Session = mongoose.model('Session', SessionSchema);
