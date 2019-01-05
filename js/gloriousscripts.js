const demo = new GDemo('#gloriousContainer');
const response = `
Woman 1 paired with Man 3

Woman 2 paired with Man 1

Woman 3 paired with Man 2
`
demo
    .openApp('terminal', {
        minHeight: 530
    })
    .command('python stablematching.py', {
        promptString: '$',
        onCompleteDelay: 500
    })
    .respond('How many men and women do you want paired off?')
    .command('3', {
        onCompleteDelay: 2000
    })
    .respond('What is man 1\'s preference list?')
    .command('2 1 3', {
        onCompleteDelay: 1500
    })
    .respond('What is man 2\'s preference list?')
    .command('2 3 1', {
        onCompleteDelay: 1500
    })
    .respond('What is man 3\'s preference list?')
    .command('1 3 2', {
        onCompleteDelay: 1500
    })
    .respond('What is woman 1\'s preference list?')
    .command('2 3 1', {
        onCompleteDelay: 1000
    })
    .respond('What is woman 2\'s preference list?')
    .command('2 1 3', {
        onCompleteDelay: 1000
    })
    .respond('What is woman 3\'s preference list?')
    .command('3 2 1', {
        onCompleteDelay: 2000
    })
    .respond(response)
    .end();