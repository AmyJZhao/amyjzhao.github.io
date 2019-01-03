const demo = new GDemo('#gloriousContainer');
const response = `
Woman 1 paired with Man 3

Woman 2 paired with Man 1

Woman 3 paired with Man 2
`
demo
    .openApp('terminal', {
        minHeight: '530px'
    })
    .command('python stablematching.py', {
        promptString: '$',
        onCompleteDelay: 500
    })
    .respond('How many men and women do you want paired off?')
    .command('3', {
        promptString: '',
        onCompleteDelay: 500
    })
    .respond('What is man 1\'s preference list?')
    .command('2 1 3')
    .respond('What is man 2\'s preference list?')
    .command('2 3 1')
    .respond('What is man 3\'s preference list?')
    .command('1 3 2')
    .respond('What is woman 1\'s preference list?')
    .command('2 3 1')
    .respond('What is woman 2\'s preference list?')
    .command('2 1 3')
    .respond('What is woman 3\'s preference list?')
    .command('3 2 1')
    .respond(response)
    .end();