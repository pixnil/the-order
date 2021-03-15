module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "c87ec5ba3b74a0bda9a6d342ba382f37"),
      /* url: '/dashboard',
      serveAdminPanel: true, */
    },
  },
  /*vercel: {
    token: env("VERCEL_TOKEN", "797P3oN6mKkPnfZoBTnFrJgv"),
    teamId: env("VERCEL_TEAM_ID", "pixnil"),
    projectId: env("VERCEL_PROJECT_ID", "prj_Db5zETdxTM5li9TtDWIH27RRjEAL"),
    triggers: {
      production: env("VERCEL_TRIGGER_PRODUCTION"),
    },
  },*/
});
