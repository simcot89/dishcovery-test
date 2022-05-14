export const TransformICurrentUserToIUser = (iUser) => {
    return {
        bio: iUser.bio,
        email: iUser.email,
        image: iUser.image,
        username: iUser.username
    };
};
//# sourceMappingURL=IUserTransformers.js.map