import { EventEmitter } from "events";
import productService from "../services/product.service.mjs";

export const purchaseDoneEvent = new EventEmitter();

purchaseDoneEvent.on("created", (id, data) => {
    productService.update(id, data);
});