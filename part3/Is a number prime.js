function isPrime(num) {
    if (num < 0) return false
    if (num == 1 || num == 0) return false
    for (let i = 2; i<=Math.sqrt(num); i++) {
        if(i == num) i++
        if (num%i == 0) return false
    }
    return true
}