(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1088a1f6"],{"0fd9":function(t,e,n){"use strict";var a=n("ade3"),i=n("5530"),s=(n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),o=n("d9f7"),r=n("80d2"),l=["sm","md","lg","xl"],c=["start","end","center"];function u(t,e){return l.reduce((function(n,a){return n[t+Object(r["D"])(a)]=e(),n}),{})}var d=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},h=u("align",(function(){return{type:String,default:null,validator:d}})),g=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},f=u("justify",(function(){return{type:String,default:null,validator:g}})),m=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},p=u("alignContent",(function(){return{type:String,default:null,validator:m}})),v={align:Object.keys(h),justify:Object.keys(f),alignContent:Object.keys(p)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var a=b[t];if(null!=n){if(e){var i=e.replace(t,"");a+="-".concat(i)}return a+="-".concat(n),a.toLowerCase()}}var C=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},h),{},{justify:{type:String,default:null,validator:g}},f),{},{alignContent:{type:String,default:null,validator:m}},p),render:function(t,e){var n=e.props,i=e.data,s=e.children,r="";for(var l in n)r+=String(n[l]);var c=C.get(r);return c||function(){var t,e;for(e in c=[],v)v[e].forEach((function(t){var a=n[t],i=y(e,t,a);i&&c.push(i)}));c.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(t,"align-".concat(n.align),n.align),Object(a["a"])(t,"justify-".concat(n.justify),n.justify),Object(a["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),C.set(r,c)}(),t(n.tag,Object(o["a"])(i,{staticClass:"row",class:c}),s)}})},"169a":function(t,e,n){"use strict";var a=n("5530"),i=n("2909"),s=n("ade3"),o=(n("a9e3"),n("498a"),n("caad"),n("2532"),n("7db0"),n("368e"),n("480e")),r=n("4ad4"),l=n("b848"),c=n("75eb"),u=n("e707"),d=n("e4d3"),h=n("21be"),g=n("f2e7"),f=n("a293"),m=n("58df"),p=n("d9bd"),v=n("80d2"),b=Object(m["a"])(r["a"],l["a"],c["a"],u["a"],d["a"],h["a"],g["a"]);e["a"]=b.extend({name:"v-dialog",directives:{ClickOutside:f["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(s["a"])(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(s["a"])(t,"v-dialog--active",this.isActive),Object(s["a"])(t,"v-dialog--persistent",this.persistent),Object(s["a"])(t,"v-dialog--fullscreen",this.fullscreen),Object(s["a"])(t,"v-dialog--scrollable",this.scrollable),Object(s["a"])(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(p["e"])("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):u["a"].options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){t.previousActiveElement=document.activeElement,t.$refs.content.focus(),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===v["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),a=Object(i["a"])(n).find((function(t){return!t.hasAttribute("disabled")}));a&&a.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(o["a"],{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:Object(a["a"])({role:"document",tabindex:t.isActive?0:void 0},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent:function(){var t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style=Object(a["a"])(Object(a["a"])({},t.style),{},{maxWidth:"none"===this.maxWidth?void 0:Object(v["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(v["g"])(this.width)})),this.$createElement("div",t,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},"2a7f":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));var a=n("71d9"),i=n("80d2"),s=Object(i["h"])("v-toolbar__title"),o=Object(i["h"])("v-toolbar__items");a["a"]},"2bfd":function(t,e,n){},"2fa4":function(t,e,n){"use strict";n("20f6");var a=n("80d2");e["a"]=Object(a["h"])("spacer","div","v-spacer")},"368e":function(t,e,n){},"3c93":function(t,e,n){},"575d":function(t,e,n){},"5e23":function(t,e,n){},"69d0":function(t,e,n){"use strict";n("ae15")},"71d9":function(t,e,n){"use strict";var a=n("3835"),i=n("5530"),s=(n("a9e3"),n("0481"),n("5e23"),n("8dd9")),o=n("adda"),r=n("80d2"),l=n("d9bd");e["a"]=s["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(i["a"])(Object(i["a"])({},this.measurableStyles),{},{height:Object(r["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var n=Object(a["a"])(e,2),i=n[0],s=n[1];t.$attrs.hasOwnProperty(i)&&Object(l["a"])(i,s,t)}))},methods:{genBackground:function(){var t={height:Object(r["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(o["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(r["g"])(this.computedContentHeight)}},Object(r["r"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(r["g"])(this.extensionHeight)}},Object(r["r"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],n=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,n,e)}})},"8fe9":function(t,e,n){},"980c":function(t,e,n){"use strict";n("575d")},a711:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-card-text",[n("v-row",[n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{label:"Họ tên",outlined:"",placeholder:"Họ và tên",dense:"",clearable:"","hide-details":"auto"},model:{value:t.dataSearch["HoVaTen"],callback:function(e){t.$set(t.dataSearch,"HoVaTen",e)},expression:"dataSearch['HoVaTen']"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{label:"Số CMND/ CCCD",outlined:"",placeholder:"Số CMND/ CCCD",dense:"",clearable:"","hide-details":"auto"},model:{value:t.dataSearch["CMTCCCD"],callback:function(e){t.$set(t.dataSearch,"CMTCCCD",e)},expression:"dataSearch['CMTCCCD']"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{label:"Ngày đăng ký tiêm",outlined:"",placeholder:"Ngày đăng ký tiêm",dense:"",clearable:"","hide-details":"auto"},model:{value:t.dataSearch["NgayDangKi"],callback:function(e){t.$set(t.dataSearch,"NgayDangKi",e)},expression:"dataSearch['NgayDangKi']"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("v-autocomplete",{attrs:{items:t.listDoiTuong,placeholder:"Nhóm đối tượng","item-text":"doiTuongMoTa","item-value":"doiTuongMa","hide-no-data":"",outlined:"",dense:"","hide-details":"auto",clearable:""},model:{value:t.dataSearch["NhomDoiTuong"],callback:function(e){t.$set(t.dataSearch,"NhomDoiTuong",e)},expression:"dataSearch['NhomDoiTuong']"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listCoSoYTe,"item-text":"tenCoSo","item-value":"maCoSo",outlined:"",placeholder:"Cơ sở y tế",dense:"","hide-details":"auto",clearable:""},model:{value:t.coSoYTe,callback:function(e){t.coSoYTe=e},expression:"coSoYTe"}})],1),n("v-col",{staticClass:"pb-0",attrs:{cols:"12",md:"6"}},[n("v-autocomplete",{attrs:{"hide-no-data":"",items:t.listDiaBan,"item-text":"tenDiaBan","item-value":"id",outlined:"",placeholder:"Tổ dân phố, khóm ấp, thôn bản…",dense:"","hide-details":"auto",clearable:""},model:{value:t.dataSearch["DiaBanCoSo_ID"],callback:function(e){t.$set(t.dataSearch,"DiaBanCoSo_ID",e)},expression:"dataSearch['DiaBanCoSo_ID']"}})],1)],1),n("v-row",{staticClass:"justify-end"},[n("v-btn",{staticClass:"mt-3 mx-3",attrs:{color:"#0072bc"},on:{click:function(e){return t.$emit("trigger-search",t.dataSearch)}}},[n("v-icon",{attrs:{left:"",size:"22"}},[t._v(" mdi-magnify ")]),t._v(" Tìm kiếm ")],1)],1)],1)],1)},i=[],s=(n("7db0"),{name:"Search",props:[],data:function(){return{listDoiTuong:[],listDiaBan:[],listCoSoYTe:[],coSoYTe:"",dataSearch:{HoVaTen:"",CMTCCCD:"",NhomDoiTuong:"",DiaBanCoSo_ID:"",CoSoYTe_Ma:"",NgayDangKi:""}}},created:function(){var t=this;t.getCoSoYTe(),t.getNhomDoiTuong()},watch:{coSoYTe:function(t){this.dataSearch.CoSoYTe_Ma=t,this.getDiaBanCoSo(t)}},computed:{breakpointName:function(){return this.$store.getters.getBreakpointName},userLogin:function(){return this.$store.getters.getPermistion}},methods:{getDiaBanCoSo:function(t){var e=this,n=e.listCoSoYTe.find((function(e){return e.maCoSo==t})),a={id:n["id"]};e.$store.dispatch("getDiaBanCoSo",a).then((function(t){e.listDiaBan=t||[]}))},getCoSoYTe:function(){var t=this,e={};t.$store.dispatch("getCoSoYTe",e).then((function(e){t.listCoSoYTe=e||[]}))},getNhomDoiTuong:function(){var t=this,e={};t.$store.dispatch("getNhomDoiTuong",e).then((function(e){t.listDoiTuong=e||[]}))}}}),o=s,r=(n("69d0"),n("2877")),l=n("6544"),c=n.n(l),u=n("c6a6"),d=n("8336"),h=n("99d9"),g=n("62ad"),f=n("132d"),m=n("0fd9"),p=n("8654"),v=Object(r["a"])(o,a,i,!1,null,"2321446a",null);e["a"]=v.exports;c()(v,{VAutocomplete:u["a"],VBtn:d["a"],VCardText:h["b"],VCol:g["a"],VIcon:f["a"],VRow:m["a"],VTextField:p["a"]})},ae15:function(t,e,n){},b28b:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{style:"xs"===t.breakpointName||"sm"===t.breakpointName?"padding-top: 75px":"",attrs:{id:"users",fluid:"",tag:"section"}},[n("base-material-card",{staticClass:"px-5 py-3",staticStyle:{"margin-top":"20px"},attrs:{icon:"mdi-clipboard-text",title:"DANH SÁCH ĐĂNG KÝ TIÊM CHÍNH THỨC"}},[n("v-btn",{staticClass:"mx-0",staticStyle:{position:"absolute",right:"40px",top:"15px"},attrs:{fab:"",dark:"",small:"",color:"#0072bc"},on:{click:function(e){return e.stopPropagation(),t.showTimKiem(e)}}},[n("v-icon",{attrs:{dark:""}},[t._v(" mdi-magnify ")])],1),t.showAdvanceSearch?n("v-card-text",[n("tim-kiem",{ref:"timkiem",on:{"trigger-search":t.searchDangKyTiem}})],1):t._e(),n("v-card-text",{class:"lg"!==t.breakpointName?"px-0":"pt-0"},[n("div",{class:"xs"===t.breakpointName?"mb-3":"d-flex my-3"},["xs"===t.breakpointName?n("div",{staticClass:"mr-auto pt-2 mb-3"},[t._v(" Tổng số: "),n("span",{staticStyle:{"font-weight":"bold",color:"green"}},[t._v(t._s(t.totalItem))]),t._v(" người ")]):n("span",{staticClass:"mr-auto pt-2"},[t._v(" Tổng số: "),n("span",{staticStyle:{"font-weight":"bold",color:"green"}},[t._v(t._s(t.totalItem))]),t._v(" người ")])]),n("v-data-table",{staticClass:"elevation-1",attrs:{"show-select":"",headers:t.headers,items:t.items,"hide-default-footer":"","no-data-text":"Không có",loading:t.loadingData,"loading-text":"Đang tải... "},scopedSlots:t._u([{key:"item.index",fn:function(e){e.item;var a=e.index;return[n("span",[t._v(t._s((t.page+1)*t.itemsPerPage-t.itemsPerPage+a+1))])]}},{key:"item.hoVaTen",fn:function(e){var a=e.item;e.index;return[n("p",{staticClass:"mb-0",staticStyle:{"font-weight":"500"}},[t._v(t._s(a.hoVaTen))]),n("p",{staticClass:"mb-2",staticStyle:{color:"blue"}},[t._v("Ngày sinh: "+t._s(t.parseDate(a.ngaySinh)))])]}},{key:"item.diaChiNoiO",fn:function(e){var a=e.item;e.index;return[n("p",{staticClass:"mb-2"},[t._v(t._s(a.diaChiNoiO)+" - "+t._s(a.phuongXaTen)+" - "+t._s(a.quanHuyenTen)+" - "+t._s(a.tinhThanhTen))])]}},{key:"item.ngayDangKi",fn:function(e){var a=e.item;e.index;return[n("p",{staticClass:"mb-2"},[t._v(t._s(t.parseDate(a.ngayDangKi)))])]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t.pageCount?n("pagination",{attrs:{pageInput:t.page,pageCount:t.pageCount},on:{"tiny:change-page":t.changePage}}):t._e()],1)],1),n("v-dialog",{attrs:{"max-width":"600"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-toolbar-title",[t._v("Thông tin chi tiết")]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("mdi-close")])],1)],1)],1),n("v-card-text",{staticClass:"mt-5"}),n("v-card-actions",{staticClass:"justify-end"},[n("v-btn",{staticClass:"white--text mr-2",attrs:{color:"red",loading:t.loading,disabled:t.loading},on:{click:function(e){t.dialog=!1}}},[n("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]),t._v(" Thoát ")],1)],1)],1)],1)],1)],1)},i=[],s=(n("fb6a"),n("159b"),n("a711")),o=n("cf9c"),r={name:"Customers",components:{"tim-kiem":s["a"],pagination:o["a"]},data:function(){return{loading:!1,loadingData:!1,listDaiLy:[],dailySelected:"",dialog:!1,lastVisible:"",firstVisible:"",totalItem:0,page:0,pageCount:0,itemsPerPage:5,items:[],advanceSearchData:{codeNumber:"",customerTelNo:"",branchUid:""},showAdvanceSearch:!1,selected:[],dataInputSearch:"",headers:[{sortable:!1,text:"STT",align:"center",value:"index"},{sortable:!1,text:"Họ tên",align:"left",value:"hoVaTen"},{sortable:!1,text:"Số CMND/ CCCD",align:"left",value:"cmtcccd"},{sortable:!1,text:"Mã nhóm đối tượng",align:"left",value:"nhomDoiTuong"},{sortable:!1,text:"Số điện thoại",align:"left",value:"soDienThoai"},{sortable:!1,text:"Địa chỉ",align:"left",value:"diaChiNoiO"},{sortable:!1,text:"Ngày đăng ký tiêm",align:"center",value:"ngayDangKi"}]}},created:function(){var t=this;t.$store.commit("SET_INDEXTAB",1);var e=this.$store.getters.getIsSigned;e?t.getDanhSachDangKyChinhThuc(0):t.$router.push({path:"/login?redirect=/pages/danh-sach-dang-ky-tiem-moi"})},computed:{breakpointName:function(){return this.$store.getters.getBreakpointName},userLogin:function(){return this.$store.getters.getPermistion}},methods:{searchDangKyTiem:function(t){var e=this;console.log("dataSearch",t),e.dataInputSearch=t,e.getDanhSachDangKyChinhThuc(0,t)},showTimKiem:function(){var t=this;t.showAdvanceSearch=!t.showAdvanceSearch},getDanhSachDangKyChinhThuc:function(t,e){var n=this;n.loadingData=!0;var a={page:t,size:n.itemsPerPage,tinhtrangdangky:1,cmtcccd:e&&e["CMTCCCD"]?e["CMTCCCD"]:"",nhomdoituong:e&&e["NhomDoiTuong"]?e["NhomDoiTuong"]:"",ngaydangki:e&&e["NgayDangKi"]?e["NgayDangKi"]:"",hovaten:e&&e["HoVaTen"]?e["HoVaTen"]:"",diabancosoid:e&&e["DiaBanCoSo_ID"]?e["DiaBanCoSo_ID"]:"",cosoytema:e&&e["CoSoYTe_Ma"]?e["CoSoYTe_Ma"]:""};n.$store.dispatch("getNguoiTiemChung",a).then((function(t){n.loadingData=!1,t?(n.items=t.hasOwnProperty("data")?t.data:[],n.totalItem=t.hasOwnProperty("total")?t.total:0,n.pageCount=Math.ceil(n.totalItem/n.itemsPerPage)):(n.items=[],n.totalItem=0)})).catch((function(){n.loadingData=!1}))},changePage:function(t){var e=this;e.page=t.page,e.getDanhSachDangKyChinhThuc(t.page,e.dataInputSearch)},editRegistration:function(t){var e=this;e.$store.commit("SET_RegistrationUpdate",t),e.$router.push("/pages/dang-ky-tiem-moi/"+t.id)},parseDate:function(t){if(t){var e=String(t).length;return 4===e?t:String(t).slice(6,8)+"/"+String(t).slice(4,6)+"/"+String(t).slice(0,4)}return""},prevPage:function(){var t=this;t.loadingData=!0,t.page-=1,db.collection("customers").orderBy("dealDate").endBefore(t.firstVisible).limit(t.itemsPerPage).get().then((function(e){t.loadingData=!1,t.lastVisible=e.docs[e.docs.length-1];var n=[];e.size?(e.docs.forEach((function(t){n.push(t.data())})),t.items=n):t.items=[]})).catch((function(){t.loadingData=!1}))},nextPage:function(){var t=this;t.loadingData=!0,t.page+=1,db.collection("customers").orderBy("dealDate").startAfter(t.lastVisible).limit(t.itemsPerPage).get().then((function(e){t.loadingData=!1,t.firstVisible=e.docs[0];var n=[];e.size?(e.docs.forEach((function(t){n.push(t.data())})),t.items=n):t.items=[]})).catch((function(){t.loadingData=!1}))}}},l=r,c=(n("980c"),n("2877")),u=n("6544"),d=n.n(u),h=n("8336"),g=n("b0af"),f=n("99d9"),m=n("a523"),p=n("8fea"),v=n("169a"),b=n("132d"),y=n("2fa4"),C=n("71d9"),S=n("2a7f"),x=Object(c["a"])(l,a,i,!1,null,"af4d5c66",null);e["default"]=x.exports;d()(x,{VBtn:h["a"],VCard:g["a"],VCardActions:f["a"],VCardText:f["b"],VContainer:m["a"],VDataTable:p["a"],VDialog:v["a"],VIcon:b["a"],VSpacer:y["a"],VToolbar:C["a"],VToolbarItems:S["a"],VToolbarTitle:S["b"]})},c6a6:function(t,e,n){"use strict";var a=n("5530"),i=(n("d81d"),n("4de4"),n("498a"),n("7db0"),n("caad"),n("2532"),n("2bfd"),n("b974")),s=n("8654"),o=n("d9f7"),r=n("80d2"),l=Object(a["a"])(Object(a["a"])({},i["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e["a"]=i["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:i["a"].options.props.menuProps.type,default:function(){return l}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},i["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(r["q"])(e,t.itemText),a=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),a)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=i["a"].options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(a["a"])(Object(a["a"])({},l),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=i["a"].options.computed.listData.call(this);return t.props=Object(a["a"])(Object(a["a"])({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===r["w"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===r["w"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==r["w"].backspace&&t!==r["w"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var a=this.selectedItems.length,i=t!==a-1?t:t-1,s=this.selectedItems[i];s?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=i}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,i["a"].options.methods.clearableCallback.call(this)},genInput:function(){var t=s["a"].options.methods.genInput.call(this);return t.data=Object(o["a"])(t.data,{attrs:{"aria-activedescendant":Object(r["o"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["o"])(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=i["a"].options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?i["a"].options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[r["w"].home,r["w"].end].includes(e)||i["a"].options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){i["a"].options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){i["a"].options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){i["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var a=this.selectedItems[this.selectedIndex],i=this.getText(a);null==(e=t.clipboardData)||e.setData("text/plain",i),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",i),t.preventDefault()}}}})},cf9c:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center mt-4"},[n("nav",{attrs:{role:"navigation","aria-label":"Pagination Navigation"}},[n("ul",{staticClass:"v-pagination theme--light"},[n("li",[n("button",{class:0==t.currentPage?"v-pagination__navigation v-pagination__navigation--disabled":"v-pagination__navigation",attrs:{type:"button","aria-label":"Previous page"},on:{click:t.prevPage}},[n("i",{staticClass:"v-icon notranslate mdi mdi-chevron-left theme--light",attrs:{"aria-hidden":"true"}})])]),n("li",[n("button",{staticClass:"v-pagination__item v-pagination__item--active primary",attrs:{type:"button","aria-current":"true"}},[t._v(" "+t._s(t.currentPage+1)+" ")])]),n("li",[n("button",{class:t.currentPage==t.pageCount-1?"v-pagination__navigation v-pagination__navigation--disabled":"v-pagination__navigation",attrs:{type:"button","aria-label":"Next page"},on:{click:t.nextPage}},[n("i",{staticClass:"v-icon notranslate mdi mdi-chevron-right theme--light",attrs:{"aria-hidden":"true"}})])])])])])},i=[],s=(n("a9e3"),{name:"Search",props:{pageInput:{type:Number,default:0},pageCount:{type:Number,default:30}},data:function(){return{currentPage:0}},created:function(){this.currentPage=this.pageInput},watch:{pageInput:function(t){this.currentPage=t}},computed:{breakpointName:function(){return this.$store.getters.getBreakpointName}},methods:{prevPage:function(){var t=this;t.currentPage-=1,t.$emit("tiny:change-page",{page:t.currentPage})},nextPage:function(){var t=this;t.currentPage+=1,t.$emit("tiny:change-page",{page:t.currentPage})}}}),o=s,r=(n("ea42"),n("2877")),l=Object(r["a"])(o,a,i,!1,null,"fac1af20",null);e["a"]=l.exports},e707:function(t,e,n){"use strict";n("a9e3"),n("caad"),n("2532");var a=n("5530"),i=(n("3c93"),n("a9ad")),s=n("7560"),o=n("f2e7"),r=n("58df"),l=Object(r["a"])(i["a"],s["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes:function(){return Object(a["a"])({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(t){var e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",class:this.classes,style:this.styles},e)}}),c=l,u=n("80d2"),d=n("2b0e");e["a"]=d["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var t=new c({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();var e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay:function(){var t=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){t.overlay&&(void 0!==t.activeZIndex?t.overlay.zIndex=String(t.activeZIndex-1):t.$el&&(t.overlay.zIndex=Object(u["t"])(t.$el)),t.overlay.value=!0)})),!0},removeOverlay:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(u["a"])(this.overlay.$el,"transitionend",(function(){t.overlay&&t.overlay.$el&&t.overlay.$el.parentNode&&!t.overlay.value&&(t.overlay.$el.parentNode.removeChild(t.overlay.$el),t.overlay.$destroy(),t.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener:function(t){if("keydown"===t.type){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;var e=[u["w"].up,u["w"].pageup],n=[u["w"].down,u["w"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!n.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar:function(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;var e=window.getComputedStyle(t);return["auto","scroll"].includes(e.overflowY)&&t.scrollHeight>t.clientHeight},shouldScroll:function(t,e){return 0===t.scrollTop&&e<0||t.scrollTop+t.clientHeight===t.scrollHeight&&e>0},isInside:function(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath:function(t){var e=t.path||this.composedPath(t),n=t.deltaY;if("keydown"===t.type&&e[0]===document.body){var a=this.$refs.dialog,i=window.getSelection().anchorNode;return!(a&&this.hasScrollbar(a)&&this.isInside(i,a))||this.shouldScroll(a,n)}for(var s=0;s<e.length;s++){var o=e[s];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return this.shouldScroll(o,n)}return!0},composedPath:function(t){if(t.composedPath)return t.composedPath();var e=[],n=t.target;while(n){if(e.push(n),"HTML"===n.tagName)return e.push(document),e.push(window),e;n=n.parentElement}return e},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(u["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},ea42:function(t,e,n){"use strict";n("8fe9")}}]);
//# sourceMappingURL=chunk-1088a1f6.af0413eb.js.map