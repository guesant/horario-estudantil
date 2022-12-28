FROM quay.io/keycloak/keycloak:19.0 as builder
ENV KC_HEALTH_ENABLED=true
ENV KC_METRICS_ENABLED=false
ENV KC_FEATURES=token-exchange,recovery-codes
ENV KC_DB=postgres
RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:19.0
COPY --from=builder /opt/keycloak/ /opt/keycloak/
COPY ./data/import /opt/keycloak/data/import/
WORKDIR /opt/keycloak
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start", "--import-realm", "--spi-login-protocol-openid-connect-legacy-logout-redirect-uri=true", "--optimized", "--proxy=edge"]