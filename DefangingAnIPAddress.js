function DefangingAnIPAddress(IpAddress) {
    IpAddress = IpAddress.split('');
    for (let i = 1; i < IpAddress.length; i++) {
        if (IpAddress[i] == '.') {
            IpAddress[i] = '[.]'
        }
    }
    return IpAddress.join('');
};

console.log(DefangingAnIPAddress("1.1.1.1"))

console.log(DefangingAnIPAddress('255.100.50.0'))