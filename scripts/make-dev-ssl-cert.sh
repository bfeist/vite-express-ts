#!/bin/sh
#
# Creates a self-signed SSL certificate for the purpose of local development

if [ -z "${1}" ]; then
    echo "No Common Name supplied (e.g. yoursite.example.com), using \"localhost\""
    CN="localhost"
else
    CN="${1}"
fi

set -eux

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
LOCAL_DIR="${SCRIPT_DIR}/../.local"
CERTS_DIR="${LOCAL_DIR}/certs"
PRIVATE_DIR="${LOCAL_DIR}/private"

mkdir -p "${CERTS_DIR}"
mkdir -p "${PRIVATE_DIR}"

# Ensure an SSL cert exists (if not, create self-signed)
openssl req -x509 -newkey rsa:4096 \
    -keyout "${PRIVATE_DIR}/nginx.key" \
    -out "${CERTS_DIR}/nginx.crt" \
    -days 365 -nodes \
    -subj "//C=US/C=US/ST=Texas/L=Houston/O=NA/CN=${CN}" # doubled //C=US/C=US https://github.com/openssl/openssl/issues/8795
