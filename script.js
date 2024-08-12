const container = React.createElement('div',
    {className : "container", id : "container"},
    [
        React.createElement('section', {key:1}, [
            React.createElement('p',{key:1}, 'Yeah'),
            React.createElement('img',{
                key:2, style :{width:200,backgroundColor :'blue'} ,
                src :"https://media.gettyimages.com/id/471105469/photo/stainless-steel-texture.jpg?s=612x612&w=0&k=20&c=HfsDpSwB4z_yCejAQGEdIcN1ILXUyDZMWIT9T0DvB14="}, )
        ]),
        React.createElement('section', {key:2}, [
            React.createElement('p',{key:1}, 'Yeah'),
            React.createElement('div',{class:'input-group'},[
            React.createElement('form',{
                key:2},[
                    React.createElement('label',{key:1, htmlFor :'email'},'email'),
                    React.createElement('input',{key:2, id :'email'})
                ])
            ])    
        ])
    ]);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(container);