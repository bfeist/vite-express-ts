#!/bin/sh

# Fail script immediately on errors, don't allow unset variables, and print each command (debugging)
# https://explainshell.com/explain?cmd=set+-eu
set -eu

# In dev we wan to run `npm i` when the container starts. This is because the dependencies could
# change from the time the docker image was built to the time the image was used to create the
# container. In prod the dependencies are locked, so we don't need to re-run.
npm i

# From https://stackoverflow.com/a/39082923/2782380:
# take any command line arguments passed to entrypoint.sh and exec them as a command. The intention
# is basically "Do everything in this .sh script, then in the same shell run the command the user
# passes in on the command line".
echo "docker-entrypoint.sh complete, running command: $@"
exec "$@"
