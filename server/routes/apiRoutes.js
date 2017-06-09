require 

export default function ConfigApiRoutes(app) {
    app.use(cors());
    app.use(timelineRouter);
    app.use(authenticationRouter);
    app.use(eventVoteRoutes);
    app.use(wildcardRouter);
}