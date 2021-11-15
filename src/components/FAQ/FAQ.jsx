import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div
      id="faq"
      className="faq px-4 py-6  mt-16 bg-custom-gradient bg-cover text-black bg-center flex justify-center"
    >
      <div className="collapsible-wrapper max-w-3xl">
        <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                What is Project Six1Three?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Project Six1Three is a community driven NFT initiative that
                introduces the first of its kind jewish community on the
                blockchain. All profits from the project will be donated to top
                jewish charitable foundations. Holding onto a “Six1Three” token
                will grant you access to future drops, charitable rewards,
                priceless prizes, and membership to an entire community driven
                by good.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>When is Launch?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>December 6th (the last night of Hanukkah!)</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>What is the price?</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>All Genesis NFTs are .613 ETH</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How do I get a Genesis NFT
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Project Six1Three: Genesis NFTs will be available for purchase
                through initial sale on the Six1Three.xyz website. Upon
                purchase, Genesis NFTs will be randomly blind minted on the
                Ethereum Blockchain, delivered to your Metamask wallet and can
                be viewed on your Open Sea account.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How were the Genesis NFTs designed?
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Brooklyn born artist Coby Katz has hand drawn every single piece
                of the Genesis collection. We then processed the artwork through
                an algorithm to generate 613 completely unique 1/1 pieces of
                art. Each Genesis NFT is a 1 of a kind with varying
                characteristics like color, gradient, and texture.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                How to purchase a Genesis NFT
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <ul className="list-inside list-disc">
                <li className="mt-5">
                  Step 1. Visit Metamask.io and download the Metamask extension
                  for your browser.
                </li>
                <li className="mt-5">
                  Step 2. Once installed, follow the instructions to create your
                  very own crypto wallet! Remember to securely store your "seed
                  phrase" as this is what gives you access to your wallet, if
                  you lose it, there is no way to get it back and you will lose
                  access to everything in your wallet.
                </li>
                <li className="mt-5">
                  Step 3. Buy Ethereum on any exchange. The most popular ones
                  are Coinbase.com, Gemini.com, or Crypto.com
                </li>
                <li className="mt-5">
                  Step 4. Send your Ethereum from the exchange to your Metamask
                  wallet. To do this, simply copy and paste your MetaMask wallet
                  address into the "recipient address" on the exchange and enter
                  the amount you’d like to transfer.
                </li>
                <li className="mt-5">
                  Step 5. On launch day visit our website and you’ll see a popup
                  asking to connect your Metamask wallet. (Little orange fox in
                  top right hand corner of browser extensions). Simply sign in
                  and now your wallet is connected.
                </li>
                <li className="mt-5">
                  Step 6. At the time of Minting, click “MINT” on our website.
                  Enter the number of Genesis NFTs you’d like to purchase and
                  confirm the transactions in your Metamask. And thats it! Mazal
                  Tov and welcome to the Tribe!
                </li>
              </ul>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
