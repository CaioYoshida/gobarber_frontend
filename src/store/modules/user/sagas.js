import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  updateProfileSuccess,
  updateProfileFailure,
} from '~/store/modules/user/actions';

export function* updateProfile({ payload }) {
  const { name, email, avatar_id, ...rest } = payload.data;

  // we use "Object.assign() is used to merge two or more obejcts"
  const profile = {
    name,
    email,
    avatar_id,
    ...(rest.oldPassword ? rest : {}),
  };

  try {
    const response = yield call(api.put, 'users', profile);

    toast.success('Profile was updated successfully');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error(
      `Something went wrong on profile's update. Check your informations`
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
