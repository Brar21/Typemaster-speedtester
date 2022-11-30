

export default ()=>{

    const texts = [
        'Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their days writing projects, words are already flowing from their fingers.',
        'test2',
        'test3'
    ];
    return[ Math.floor(Math.random()*texts.length)]
}