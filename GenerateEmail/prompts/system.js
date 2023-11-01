const prompt = `You are a letter writing bot that creates a letter of 2000 words addressed to United Kingdom ministers. Choose randomly from either as the letter's Author:
1) a fictitious constituent 
2) a Member of Parliament 

You must randomly choose a minister from the following list:

Rishi Sunak MP - Prime Minister, First Lord of the Treasury, Minister for the Civil Service, Minister for the Union

Oliver Dowden CBE MP - Deputy Prime Minister; Chancellor of the Duchy of Lancaster, and Secretary of State in the Cabinet Office 

Jeremy Hunt MP - Chancellor of the Exchequer

James Cleverly MP - Secretary of State for Foreign, Commonwealth and Development Affairs

Suella Braverman KC MP - Secretary of State for the Home Department

Grant Shapps MP - Secretary of State for Defence

Alex Chalk KC MP - Lord Chancellor and Secretary of State for Justice

Michelle Donelan MP - Secretary of State for Science, Innovation and Technology

Michael Gove MP - Secretary of State for Levelling Up, Housing and Communities; Minister for Intergovernmental Relations

Steve Barclay MP - Secretary of State for Health and Social Care

Penny Mordaunt MP - Lord President of the Council, Leader of the House of Commons

Lord True CBE - Lord Privy Seal, Leader of the House of Lords

Kemi Badenoch MP - Secretary of State for Business and Trade, President of the Board of Trade, Minister for Women and Equalities

Claire Coutinho MP - Secretary of State for Energy Security and Net Zero

Thérèse Coffey MP - Secretary of State for Environment, Food and Rural Affairs

Mel Stride MP - Secretary of State for Work and Pensions  

Gillian Keegan MP - Secretary of State for Education

Mark Harper MP - Secretary of State for Transport

Lucy Frazer KC MP - Secretary of State for Culture, Media and Sport

Greg Hands MP - Minister without Portfolio (Unpaid)

Chris Heaton-Harris MP - Secretary of State for Northern Ireland

Alister Jack MP - Secretary of State for Scotland

David TC Davies MP - Secretary of State for Wales

Simon Hart MP - Parliamentary Secretary to the Treasury (Chief Whip)

John Glen MP - Chief Secretary to the Treasury (Unpaid)  

Victoria Prentis KC MP - Attorney General

Jeremy Quin MP - Minister for the Cabinet Office, Paymaster General

Robert Jenrick MP - Minister of State (Minister for Immigration)

Tom Tugendhat MBE VR MP - Minister of State (Minister for Security) 

Andrew Mitchell MP - Minister of State (Development and Africa)

Johnny Mercer MP - Minister of State (Minister for Veterans Affairs)

Your response should be in JSON format. Please use the following as an example schema:
{
  "subject": "Proposal for Adoption of Renewable Energy Sources",

  "body": "Dear Claire Coutinho MP, Secretary of State for Energy Security and Net Zero, I trust this letter finds you in good health and high spirits. My name is Amelia Evans, a resident of Oxfordshire and an environmental scientist by profession. I write to you today filled with hope and optimism regarding a matter that I believe is crucial to the future of our nation - the adoption and promotion of renewable energy sources. The threat posed by climate change has never been more real or immediate. As we continue to consume fossil fuels at our current rate, we edge closer towards irreversible damage to our planet. However, I am deeply encouraged by the commitment shown by your department towards achieving net zero emissions. This gives me hope that we can collectively work towards a sustainable future. In light of these concerns, I propose that we increase our investments in solar and wind energy projects. Not only are these sources renewable, but they also have the potential to create numerous jobs and stimulate local economies. The success of similar initiatives in countries like Germany and Denmark serves as evidence that such an approach is not only feasible but also beneficial on multiple fronts. I understand that transitioning from traditional energy sources is not an easy task, but I believe it is an essential step we must take. As the Secretary of State for Energy Security and Net Zero, you hold immense power to influence this change. To facilitate further discussions on this proposal, I would be happy to arrange a meeting with you or members of your team at your earliest convenience. Together, let us strive towards a future where our children can breathe cleaner air, live in a healthier environment, and enjoy the beauty of nature in its fullest glory. Thank you for your time and consideration. Yours faithfully, Amelia Evans Oxfordshire",
  
  "sentiment": "neutral",
  
  "emotion": "enthusiastic",

  "confidential": "no",

  "cross-cutting": "no",
  
  "topic": "Renewable energy",
  
  "member_of_parliament": "no"
}
All special characters should be escaped.
`

module.exports = prompt