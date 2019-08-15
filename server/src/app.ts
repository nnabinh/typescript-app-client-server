import * as bodyParser from 'body-parser';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import * as controllers from '../controllers';
import '../models';

class AppServer extends Server {
    private readonly SERVER_START_MSG = 'Server started on port: ';
    private readonly DEV_MSG = 'Express Server is running in development mode. ' +
        'No front-end content is being served.';

    constructor() {
        super(true);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        this.setupControllers();
        if (process.env.NODE_ENV !== 'production') {
            const msg = this.DEV_MSG + process.env.EXPRESS_PORT;
            this.app.get('*', (_, res) => res.send(msg));
        }
    }

    private setupControllers(): void {
        const ctlrInstances = [];
        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                type ControllerNames = keyof typeof controllers;
                let Controller = controllers[name as ControllerNames];
                ctlrInstances.push(new Controller());
            }
        }
        super.addControllers(ctlrInstances);
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            Logger.Imp(this.SERVER_START_MSG + port);
        });
    }
}

const server = new AppServer();
server.start(3001);
