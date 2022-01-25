'use strict';

import rest from "rest";
import defaultRequest from "rest/interceptor/defaultRequest";
import mime from "rest/interceptor/mime";
import uriTemplateInterceptor from "./api/uriTemplateInterceptor";
import errorCode from "rest/interceptor/errorCode";
import baseRegistry from "rest/mime/registry";
import api from "./api/uriListConverter";
import rest0 from "rest/mime/type/application/hal";
const registry = baseRegistry.child();

registry.register('text/uri-list', api);
registry.register('application/hal+json', rest0);

module.exports = rest
    .wrap(mime, { registry: registry })
    .wrap(uriTemplateInterceptor)
    .wrap(errorCode)
    .wrap(defaultRequest, { headers: { 'Accept': 'application/hal+json' }});
