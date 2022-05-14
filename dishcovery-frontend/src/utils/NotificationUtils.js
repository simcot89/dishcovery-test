import Vue from "vue";
export const notifyErrors = (errors) => {
    Vue.notify({
        type: "error",
        title: "Error occurred",
        text: errors.join("<br />")
    });
};
export const notifySuccess = (message) => {
    Vue.notify({
        type: "success",
        text: message
    });
};
export const notifyWarn = (message) => {
    Vue.notify({
        type: "warn",
        text: message
    });
};
//# sourceMappingURL=NotificationUtils.js.map