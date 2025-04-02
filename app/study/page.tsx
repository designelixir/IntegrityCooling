export default function UXPage(){
    return (
        <section>
            <div className="flex-center-spacebetween">
                <div>
                    <h1>User <i>Interface</i> <strong>Page <i>Design</i></strong></h1>
                    <h2>The layout for this website looks <i>kinda</i> <strong>like <i>this</i></strong> </h2>
                </div>
                <div className="flex-center-end">
                    <div style={{height: '100px', width: '100px', borderRadius: '50px',  backgroundColor: "var(--color1)"}}></div>
                    <div style={{height: '100px', width: '100px', borderRadius: '50px', marginLeft: '-15px', backgroundColor: "var(--color2)"}}></div>
                    <div style={{height: '100px', width: '100px', borderRadius: '50px', marginLeft: '-15px', backgroundColor: "var(--color3)"}}></div>
                </div>
            </div>

            
            <h3>And here is some h3 subheader stuff. <strong>And here is some h3 subheader stuff.</strong>And here is some h3 subheader stuff. <i>And here is some h3 subheader stuff.</i>And here is some h3 subheader stuff. <strong><i>And here is some h3 subheader stuff.</i></strong></h3>
            <div className="flex-center-spaceevenly basic-padding-top-bottom">
                <div className="box">
                    <h4 className="centered-text">What a nice H4!</h4>
                    <p>Lorem ipsum dolor sit amet, ea mei definiebas mediocritatem, has id cibo prompta, qui ne sint fabulas. Laudem facete id sit, mel et inani simul interpretaris. Has voluptaria delicatissimi at. Sed te laudem scripserit. His ex odio conceptam, ex adipisci perpetua sapientem per, ad nam dicant voluptatum posidonium. Pro no inermis recteque contentiones. </p>
                    <button className="button-1">Look a button</button>

                </div>
                <div className="box">
                    <h4 className="centered-text">What a nice H4!</h4>
                    <p>Lorem ipsum dolor sit amet, ea mei definiebas mediocritatem, has id cibo prompta, qui ne sint fabulas. Laudem facete id sit, mel et inani simul interpretaris. Has voluptaria delicatissimi at. Sed te laudem scripserit. His ex odio conceptam, ex adipisci perpetua sapientem per, ad nam dicant voluptatum posidonium. Pro no inermis recteque contentiones. </p>
                    <button className="button-2">Look a button</button>

                </div>
                <div className="box">
                    <h4 className="centered-text">What a nice H4!</h4>
                    <p>Lorem ipsum dolor sit amet, ea mei definiebas mediocritatem, has id cibo prompta, qui ne sint fabulas. Laudem facete id sit, mel et inani simul interpretaris. Has voluptaria delicatissimi at. Sed te laudem scripserit. His ex odio conceptam, ex adipisci perpetua sapientem per, ad nam dicant voluptatum posidonium. Pro no inermis recteque contentiones. </p>
                    <button className="button-3">Look a button</button>

                </div>
            </div>
        </section>
    )
}