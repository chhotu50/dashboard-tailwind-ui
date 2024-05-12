const D_PATH ='/admin';
export enum RoutesEnum {
    DASHBOARD=D_PATH,
    STUDENT=`${D_PATH}/student`,
    STUDENT_ADD=`${D_PATH}/student/add`,
    PRODUCT=`${D_PATH}/product`,
    PRODUCT_ADD=`${D_PATH}/product/add`,
}