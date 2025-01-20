import{_ as b,g as _,a as y,h as p,b as a,d as l,e,t as i,f as s,m as h,s as w,z as k,A as C,B as m,k as u,l as x}from"./index-CrvGm9rs.js";import{c as A}from"./colorsPickerColors-BRaJAOBD.js";const O={class:"flex gap-3 items-center justify-between mb-2"},N={class:"text-xl font-semibold"},B={class:"text-sm text-gray-600 mb-2 ml-2 font-bold"},I={class:"grid items-center mt-1"},$={class:"flex justify-center"},j={key:0,class:"grid gap-4 text-sm mt-4"},M={class:"grid grid-cols-1 gap-4 text-xs"},S={class:"grid grid-cols-[20px_1fr] items-center"},V={class:"grid grid-cols-[20px_1fr] items-center"},z={class:"grid grid-cols-[20px_1fr] items-center"},D={class:"grid grid-cols-[20px_1fr] items-center"},E={__name:"OfficeDetailsCard",props:{office:{type:Object,required:!0,default:()=>({})}},setup(t){const c=_(!1),d=y(),g=f=>{const o=A.find(n=>n.id===f);return o?o.color:null},r=f=>{d.push({name:"AddOrEditOfficePage",params:{id:f},query:{mode:"edit"}})};return(f,o)=>{const n=p("font-awesome-icon");return a(),l("div",{class:"office-card bg-white shadow rounded-lg p-3 flex flex-col border-l-[12px] md:max-w-[18rem]",style:C({borderColor:g(t.office.selectedColor)})},[e("div",O,[e("h2",N,i(t.office.name),1),s(n,{icon:"pencil",onClick:o[0]||(o[0]=h(v=>r(t.office.id),["stop"])),class:"hover:scale-125 cursor-pointer"})]),e("div",null,[s(n,{icon:["fas","users"]}),e("span",B,i(t.office.staffMembersInOffice.length||0),1),o[2]||(o[2]=e("span",{class:"text-sm text-gray-600 mb-2 ml-2"},"Staff Members in Office",-1))]),o[3]||(o[3]=e("hr",{class:"border-gray-400 my-2"},null,-1)),e("div",I,[e("div",$,[e("button",{class:"text-xs justify-self-center",onClick:o[1]||(o[1]=h(v=>c.value=!c.value,["stop"]))},i(c.value?"Hide Info":"More Info"),1),s(n,{icon:c.value?"chevron-up":"chevron-down",class:"ml-2 text-gray-500"},null,8,["icon"])]),s(k,{name:"fade"},{default:w(()=>[c.value?(a(),l("div",j,[e("div",M,[e("div",S,[s(n,{icon:"phone",class:"icon mr-2"}),m(" "+i(t.office.phoneNumber||"N/A"),1)]),e("div",V,[s(n,{icon:"envelope",class:"icon mr-2"}),m(" "+i(t.office.email||"N/A"),1)]),e("div",z,[s(n,{icon:"building",class:"icon mr-2"}),m(" Capacity: "+i(t.office.capacity||"N/A"),1)]),e("div",D,[s(n,{icon:"map-marker-alt",class:"icon mr-2"}),m(" "+i(t.office.address||"N/A"),1)])])])):u("",!0)]),_:1})])],4)}}},F=b(E,[["__scopeId","data-v-4a9e4beb"]]),P={key:0,class:"hidden lg:inline-block text-white"},T={key:0,class:"hidden lg:inline-block text-white"},q={__name:"ActionButton",props:{text:{type:String,default:""}},setup(t){const c=()=>{console.log("Action button clicked")};return(d,g)=>{const r=p("font-awesome-icon");return a(),l("div",null,[e("button",{class:"fixed bottom-2 right-2 bg-[--action] hover:bg-[--action] text-white rounded-full shadow-lg size-12 lg:hidden",onClick:c},[s(r,{icon:["fas","plus"],class:"icon lg:hidden"}),t.text?(a(),l("span",P,i(t.text),1)):u("",!0),x(d.$slots,"default",{},void 0)]),e("button",{class:"hidden lg:inline-block bg-[--action] hover:bg-[--action] text-white rounded-md shadow-lg px-4 py-2",onClick:c},[s(r,{icon:["fas","plus"],class:"icon lg:hidden"}),t.text?(a(),l("span",T,i(t.text),1)):u("",!0),x(d.$slots,"default",{},void 0)])])}}},G=b(q,[["__scopeId","data-v-533f4313"]]);export{G as A,F as O};
