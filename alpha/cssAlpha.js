

resetCSS={
    '*': {m:0, p:0}, //{background-clip: Object}background-clip:
    'html, body': {h:'100%', w:'100%'},
    canvas: {d:'b'}
}
$.rs=  function(){$Ru.rule({ // css reset //this is three rules!!
    '*': {m:0, p:0},     // this rule has to decs in its decBlk
    'html, body': {h:'100%', w:'100%'},
    canvas: {d:'b'}

})
}

/*


 //******* this is one declaration:
 // a rule is a selector and a declaration block
 //
 //        font-family: Arial, sans-serif;
 //with its sibs, it makes up a declaration block
 //and with its selector, it is a rule!


 CSS SELECTORS    “.class”    “#id”  “*”   :not()
 Element  (“element”)  :all els with the given tag name.
 :button :checkbox      :file    :password  :radio    :submit  :text
 :reset  :root  :checked (checked|selected)  :enabled   :disabled  :focus  :selected  :visible
 :header all els that are headers, like h1, h2, h3 and so on.
 :hidden :image  :input(ip|ta|sl|bt)
 :target  URL-fragment spec el
 :animated -      in the progress of an animation at the time the  sel is run

 “ancestor descendant”  “pa > ch”  direct CHILD of PARENT
 “sel1,  sel2,  selN”   combined results of all the  spec  sels.
 “prev + next”    matches“next” & IMMEDIATELY PRECEDED BY a sib  “prev”.
 “prev ~ siblings”   sib that FOLLOWS after the “prev” el, and matches “siblings” sel fl

 :empty:  !ch(el|tx)  :parent 1+ ch(el|tx)    :has() 1+ sel-matching-el   :contains() contains spec text

 :only-child   :first-child  :last-child   :nth-child() :nth-last-child()
 :only-of-type  :first-of-type   :last-of-type   :nth-of-type()   :nth-last-of-type()
 :first  :last  :eq()     :gt()   :lt()   :even  :odd

 [n=”v”][n2=”v2″]  matches ALL of the MULT  spec atr fls
 [name]   HAS the spec  atr (any val) [name=”value”]  atr=v  [name!=”value”] U(atr) ||  (!= spec v)
 [name*=”value”]  atr val CONTAINS spec S       [name~=”value”]  contains given WORD (delim by sp)
 [name^=”value”]   atr val STARTS exactly w spec case-sens S      [name$=”value”]  ENDS
 [name|=”value”]   Prefix:  has spec att val = sepc S | startsW S followed by '-'

 //http://james-ross.co.uk/weblog/2013/10/31/01 (#see addendum)
 */