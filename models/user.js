class User {
    constructor(userId,projectId,taskId,permission,name) {
        this.userId = userId;
        this.projectId = projectId;
        this.taskId = taskId;
        this.permission = permission;
        this.name = name;
    }
}

export default User;