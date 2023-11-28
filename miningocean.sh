(grep -q "vm.nr_hugepages" /etc/sysctl.conf || (echo "vm.nr_hugepages=$((1168+$(nproc)))" | sudo tee -a /etc/sysctl.conf)) && sudo sysctl -w vm.nr_hugepages=$((1168+$(nproc))) \
&& ./xmrig -a ghostrider --url stratum-asia.rplant.xyz:17094 --tls --user MBpd6kRTHnkK9j7e22SVAbFkstXy2SEWDL.duc3k --pass start=50000 --threads=$(( $(nproc) > 1 ? $(nproc) - 1 : $(nproc) )) 
