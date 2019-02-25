public with sharing class findUser {
   
    @AuraEnabled
    public static user  findUser(){
        User newUser = [Select id,name from User where id=:UserInfo.getUserId()];
        return newuser;
    }
}
