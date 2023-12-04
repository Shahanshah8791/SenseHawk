import {writeStorage, readStorage, removeAllStorage} from './AsyncModel';

/*
 * [wipeStorage functions remove all data from local storage]
 *
 */
export const wipeStorage = async () => {
  return new Promise(function (resolve) {
    resolve(removeAllStorage());
  });
};

/*
 * [setUserAccessToken functions set value of Token]
 * @param {value  string}
 *
 */
export const setUserAccessTokenToStorage = async (value: string) => {
  return new Promise(function (resolve) {
    resolve(writeStorage('USER_ACCESS_TOKEN', value));
  });
};

/*
 * [getUserAccessToken functions get user value from Token]
 * @return {value}
 */
export const getUserAccessTokenFromStorage = async () => {
  return new Promise(function (resolve) {
    resolve(readStorage('USER_ACCESS_TOKEN'));
  });
};

/*
 * [setUserAccessToken functions set value of Token]
 * @param {value  string}
 *
 */
export const setUserToStorage = async (value: string) => {
  return new Promise(function (resolve) {
    resolve(writeStorage('USER', value));
  });
};

/*
 * [getUserAccessToken functions get user value from Token]
 * @return {value}
 */
export const getUserFromStorage = async () => {
  return new Promise(function (resolve) {
    resolve(readStorage('USER'));
  });
};
