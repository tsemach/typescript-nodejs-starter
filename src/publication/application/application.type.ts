import ServiceType from "./service.type";
import ServiceConfigType from "./service-config.type";

export default interface ApplicationType {
  register(where: string, service: ServiceType, config: ServiceConfigType): void;
}