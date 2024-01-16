#!/bin/sh

# Fail script immediately on errors, don't allow unset variables, and print each command (debugging)
# https://explainshell.com/explain?cmd=set+-eux
set -eux

# If any runtime changes need to be made based on environment variables, do that here.
# if [ "${WHATEVER_ENV}" = "PROD" ]; then
#     Do prod specific stuff
# fi

# From https://stackoverflow.com/a/39082923/2782380:
# take any command line arguments passed to entrypoint.sh and exec them as a command. The intention
# is basically "Do everything in this .sh script, then in the same shell run the command the user
# passes in on the command line".
echo "docker-entrypoint.sh complete, running command: $@"
exec "$@"
