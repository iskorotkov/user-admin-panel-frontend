TS_POST_PROCESS_FILE='pnpx prettier --write'
OPENAPI_SPEC_FILE=../user-admin-panel-common/openapi.yml

openapi:
	TS_POST_PROCESS_FILE=$(TS_POST_PROCESS_FILE) openapi-generator-cli generate \
		-g typescript-axios \
		-i $(OPENAPI_SPEC_FILE) \
		-o ./ \
		-c openapi.config.yml
