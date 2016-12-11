#!/usr/bin/env bash

cd "$(dirname $0)"

runner=$1
run_times=$2

npm run build

echo ""
echo "TESTING WITH BUILT FILES"
echo ""

E2E_FILE=./build/index.html E2E_TIMES=${run_times} CI=true npm run test:${runner}

echo ""
echo "TESTING WITH RUNNING SERVER"
echo ""

tmp_server_log=`mktemp`
nohup node startServer.js &>${tmp_server_log} &
server_pid=$!

grep -q 'The app is running at:' <(tail -f ${tmp_server_log})

E2E_URL=http://localhost:3000 E2E_TIMES=${run_times} CI=true npm run test:${runner}

kill -2 ${server_pid}
