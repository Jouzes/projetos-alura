import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import type { Profile } from "passport-github2";
import type { VerifyCallback } from "passport-oauth2";
import { env } from "../env/index";

passport.deserializeUser(function (user: any, done: VerifyCallback) {
  done(null, user);
});

passport.deserializeUser(function (obj: any, done: VerifyCallback) {
  done(null, obj);
});

passport.use(
  new GitHubStrategy(
    {
      clientID: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/github/callback",
    },
    function (
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: VerifyCallback,
    ) {
      return done(null, profile);
    },
  ),
);

export default passport;
