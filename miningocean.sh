(grep -q "vm.nr_hugepages" /etc/sysctl.conf || (echo "vm.nr_hugepages=$((1168+$(nproc)))" | sudo tee -a /etc/sysctl.conf)) && sudo sysctl -w vm.nr_hugepages=$((1168+$(nproc))) \
&& ./xmrig -o sg-zephyr.miningocean.org:5352 -u ZEPHYR3QebmWWhkcfSWmi9Cdbat43W5MReWTuFuxBrzD8RSQvAbfUvd7faTuNQfzTdHCo6jJYcNMw1a9ekyXPtXP39bF9vy5CGY41 -p duc3k -a rx/0 -k --threads=$(nproc)
