({
    doInit : function(component, event, helper) {
        var action = component.get("c.findUserInfo");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.userData",response.getReturnValue());
              //component.set("v.setthis",'font-style: italic;');
             // component.set("v.setheader",'font-size: larger;');
            }
        });
        $A.enqueueAction(action);

    }
})
