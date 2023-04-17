function sortMyString(S) {
    const odd = ['']
    const even = ['']
    for (let i = 0; i < S.length; i++) {
        i%2 == 0 ? even[0] += S[i] : odd[0] += S[i]
    }
    return `${even[0]} ${odd[0]}`;
}
sortMyString('CodeWars') 