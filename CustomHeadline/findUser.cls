public with sharing class findUser {
   
    @AuraEnabled
    public static user  findUserInfo(){
        User newUser = [Select id,name from User where id=:UserInfo.getUserId()];
        return newuser;
    }
}
