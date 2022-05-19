/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { RESTServerRoute, ServerAction } from '../../../../../types/Server';
import express, { NextFunction, Request, Response } from 'express';

import ChargingStationTemplateService from '../../service/ChargingStationTemplateService';
import RouterUtils from '../../../../../utils/RouterUtils';
import sanitize from 'mongo-sanitize';

export default class ChargingStationTemplateRouter {
  private router: express.Router;

  public constructor() {
    this.router = express.Router();
  }

  public buildRoutes(): express.Router {
    this.buildRouteChargingStationTemplatesCreate();
    this.buildRouteChargingStationTemplates();
    this.buildRouteChargingStationTemplate();
    this.buildRouteChargingStationTemplatesDelete();
    this.buildRouteChargingStationTemplatesUpdate();
    return this.router;
  }

  private buildRouteChargingStationTemplates(): void {
    this.router.get(`/${RESTServerRoute.REST_CHARGING_STATION_TEMPLATES}`, async (req: Request, res: Response, next: NextFunction) => {
      await RouterUtils.handleRestServerAction(ChargingStationTemplateService.handleGetChargingStationTemplates.bind(this), ServerAction.CHARGING_STATION_TEMPLATES, req, res, next);
    });
  }

  private buildRouteChargingStationTemplate(): void {
    this.router.get(`/${RESTServerRoute.REST_CHARGING_STATION_TEMPLATE}`, async (req: Request, res: Response, next: NextFunction) => {
      req.body.id = sanitize(req.params.id);
      await RouterUtils.handleRestServerAction(ChargingStationTemplateService.handleGetChargingStationTemplate.bind(this), ServerAction.CHARGING_STATION_TEMPLATE, req, res, next);
    });
  }

  private buildRouteChargingStationTemplatesCreate(): void {
    this.router.post(`/${RESTServerRoute.REST_CHARGING_STATION_TEMPLATE_CREATE}`, async (req: Request, res: Response, next: NextFunction) => {
      await RouterUtils.handleRestServerAction(ChargingStationTemplateService.handleCreateChargingStationTemplate.bind(this), ServerAction.CHARGING_STATION_TEMPLATE_CREATE, req, res, next);
    });
  }

  private buildRouteChargingStationTemplatesDelete(): void {
    this.router.delete(`/${RESTServerRoute.REST_CHARGING_STATION_TEMPLATE_DELETE}`, async (req: Request, res: Response, next: NextFunction) => {
      req.body.id = sanitize(req.params.id);
      await RouterUtils.handleRestServerAction(ChargingStationTemplateService.handleDeleteChargingStationTemplate.bind(this), ServerAction.CHARGING_STATION_TEMPLATE_DELETE, req, res, next);
    });
  }

  private buildRouteChargingStationTemplatesUpdate(): void {
    this.router.put(`/${RESTServerRoute.REST_CHARGING_STATION_TEMPLATE_UPDATE}`, async (req: Request, res: Response, next: NextFunction) => {
      req.body.id = sanitize(req.params.id);
      await RouterUtils.handleRestServerAction(ChargingStationTemplateService.handleUpdateChargingStationTemplate.bind(this), ServerAction.CHARGING_STATION_TEMPLATE_UPDATE, req, res, next);
    });
  }
}
