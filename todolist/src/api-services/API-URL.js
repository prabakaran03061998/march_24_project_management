const BASE_URL="http://localhost:8000"

export const TASK_SAVE=`${BASE_URL}/task/save`;
export const TASK_GET=`${BASE_URL}/task/get/all`;
export const USER_SAVE=`${BASE_URL}/user/usersave `;
export const  USER_GET=`${BASE_URL}/user/user/get/all `;
export const  SIGIN_SAVE=`${BASE_URL}/user/sigin`;
export const  DASHBOARD_GET=`${BASE_URL}/taskReport/task/report`;
export const  Task_OPEN = `${BASE_URL}/taskStatus/task/status?status=open`;
export const  Task_INP = `${BASE_URL}/taskStatus/task/status?status=inp`;
export const  Task_COMP = `${BASE_URL}/taskStatus/task/status?status=comp`;