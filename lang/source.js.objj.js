// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  dependencies: ['source.js'],
  extensions: ['.sj'],
  names: ['objective-j', 'obj-j', 'objectivej', 'objj'],
  patterns: [
    {
      begin:
        '((@)(interface|protocol))(?!.+;)\\s+([A-Za-z][A-Za-z0-9]*)\\s*((:)(?:\\s*)([A-Za-z][A-Za-z0-9]*))?(\\s|\\n)?',
      captures: {
        1: {name: 'storage.type.js.objj'},
        2: {name: 'punctuation.definition.storage.type.js.objj'},
        4: {name: 'entity.name.type.js.objj'},
        6: {
          name: 'punctuation.definition.entity.other.inherited-class.js.objj'
        },
        7: {name: 'entity.other.inherited-class.js.objj'},
        8: {name: 'meta.divider.js.objj'},
        9: {name: 'meta.inherited-class.js.objj'}
      },
      contentName: 'meta.scope.interface.js.objj',
      end: '((@)end)\\b',
      name: 'meta.interface-or-protocol.js.objj',
      patterns: [
        {include: '#protocol_list'},
        {include: '#method'},
        {include: '$base'}
      ]
    },
    {
      begin:
        '((@)(implementation))\\s+([A-Za-z][A-Za-z0-9]*)\\s*(?::\\s*([A-Za-z][A-Za-z0-9]*))?',
      captures: {
        1: {name: 'storage.type.js.objj'},
        2: {name: 'punctuation.definition.storage.type.js.objj'},
        4: {name: 'entity.name.type.js.objj'},
        5: {name: 'entity.other.inherited-class.js.objj'}
      },
      contentName: 'meta.scope.implementation.js.objj',
      end: '((@)end)\\b',
      name: 'meta.implementation.js.objj',
      patterns: [
        {include: '#special_variables'},
        {include: '#method'},
        {include: '$base'}
      ]
    },
    {
      begin: '@"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.js.objj'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.js.objj'}},
      name: 'string.quoted.double.js.objj',
      patterns: [
        {
          match:
            '\\\\(\\\\|[abefnrtv\'"?]|[0-3]\\d{0,2}|[4-7]\\d?|x[a-zA-Z0-9]+)',
          name: 'constant.character.escape.js.objj'
        },
        {match: '\\\\.', name: 'invalid.illegal.unknown-escape.js.objj'}
      ]
    },
    {
      begin: '\\b(id)\\s*(?=<)',
      beginCaptures: {1: {name: 'storage.type.js.objj'}},
      end: '(?<=>)',
      name: 'meta.id-with-protocol.js.objj',
      patterns: [{include: '#protocol_list'}]
    },
    {
      match: '\\b(CP_DURING|CP_HANDLER|CP_ENDHANDLER)\\b',
      name: 'keyword.control.macro.js.objj'
    },
    {
      captures: {1: {name: 'punctuation.definition.keyword.js.objj'}},
      match: '(@)(try|catch|finally|throw)\\b',
      name: 'keyword.control.exception.js.objj'
    },
    {
      captures: {1: {name: 'punctuation.definition.keyword.js.objj'}},
      match: '(@)(synchronized)\\b',
      name: 'keyword.control.synchronize.js.objj'
    },
    {
      captures: {1: {name: 'punctuation.definition.keyword.js.objj'}},
      match: '(@)(defs|encode)\\b',
      name: 'keyword.other.js.objj'
    },
    {
      captures: {2: {name: 'meta.id-type.js.objj'}},
      match: '\\b(IBOutlet|IBAction|BOOL|SEL|id(?!\\s?<)|unichar|IMP|Class)\\b',
      name: 'storage.type.js.objj'
    },
    {
      captures: {1: {name: 'punctuation.definition.storage.type.js.objj'}},
      match: '(@)(class|selector|protocol)\\b',
      name: 'storage.type.js.objj'
    },
    {
      captures: {1: {name: 'punctuation.definition.storage.modifier.js.objj'}},
      match: '(@)(synchronized|public|private|protected)\\b',
      name: 'storage.modifier.js.objj'
    },
    {match: '\\b(YES|NO|Nil|nil)\\b', name: 'constant.language.js.objj'},
    {match: '\\bCPApp\\b', name: 'support.variable.cappuccino.foundation'},
    {
      match:
        '\\bCP(R(ound(DownToMultipleOfPageSize|UpToMultipleOfPageSize)|un(CriticalAlertPanel(RelativeToWindow)?|InformationalAlertPanel(RelativeToWindow)?|AlertPanel(RelativeToWindow)?)|e(set(MapTable|HashTable)|c(ycleZone|t(Clip(List)?|F(ill(UsingOperation|List(UsingOperation|With(Grays|Colors(UsingOperation)?))?)?|romString))|ordAllocationEvent)|turnAddress|leaseAlertPanel|a(dPixel|l(MemoryAvailable|locateCollectable))|gisterServicesProvider)|angeFromString)|Get(SizeAndAlignment|CriticalAlertPanel|InformationalAlertPanel|UncaughtExceptionHandler|FileType(s)?|WindowServerMemory|AlertPanel)|M(i(n(X|Y)|d(X|Y))|ouseInRect|a(p(Remove|Get|Member|Insert(IfAbsent|KnownAbsent)?)|ke(R(ect|ange)|Size|Point)|x(Range|X|Y)))|B(itsPer(SampleFromDepth|PixelFromDepth)|e(stDepth|ep|gin(CriticalAlertSheet|InformationalAlertSheet|AlertSheet)))|S(ho(uldRetainWithZone|w(sServicesMenuItem|AnimationEffect))|tringFrom(R(ect|ange)|MapTable|S(ize|elector)|HashTable|Class|Point)|izeFromString|e(t(ShowsServicesMenuItem|ZoneName|UncaughtExceptionHandler|FocusRingStyle)|lectorFromString|archPathForDirectoriesInDomains)|wap(Big(ShortToHost|IntToHost|DoubleToHost|FloatToHost|Long(ToHost|LongToHost))|Short|Host(ShortTo(Big|Little)|IntTo(Big|Little)|DoubleTo(Big|Little)|FloatTo(Big|Little)|Long(To(Big|Little)|LongTo(Big|Little)))|Int|Double|Float|L(ittle(ShortToHost|IntToHost|DoubleToHost|FloatToHost|Long(ToHost|LongToHost))|ong(Long)?)))|H(ighlightRect|o(stByteOrder|meDirectory(ForUser)?)|eight|ash(Remove|Get|Insert(IfAbsent|KnownAbsent)?)|FSType(CodeFromFileType|OfFile))|N(umberOfColorComponents|ext(MapEnumeratorPair|HashEnumeratorItem))|C(o(n(tainsRect|vert(GlyphsToPackedGlyphs|Swapped(DoubleToHost|FloatToHost)|Host(DoubleToSwapped|FloatToSwapped)))|unt(MapTable|HashTable|Frames|Windows(ForContext)?)|py(M(emoryPages|apTableWithZone)|Bits|HashTableWithZone|Object)|lorSpaceFromDepth|mpare(MapTables|HashTables))|lassFromString|reate(MapTable(WithZone)?|HashTable(WithZone)?|Zone|File(namePboardType|ContentsPboardType)))|TemporaryDirectory|I(s(ControllerMarker|EmptyRect|FreedObject)|n(setRect|crementExtraRefCount|te(r(sect(sRect|ionR(ect|ange))|faceStyleForKey)|gralRect)))|Zone(Realloc|Malloc|Name|Calloc|Fr(omPointer|ee))|O(penStepRootDirectory|ffsetRect)|D(i(sableScreenUpdates|videRect)|ottedFrameRect|e(c(imal(Round|Multiply|S(tring|ubtract)|Normalize|Co(py|mpa(ct|re))|IsNotANumber|Divide|Power|Add)|rementExtraRefCountWasZero)|faultMallocZone|allocate(MemoryPages|Object))|raw(Gr(oove|ayBezel)|B(itmap|utton)|ColorTiledRects|TiledRects|DarkBezel|W(hiteBezel|indowBackground)|LightBezel))|U(serName|n(ionR(ect|ange)|registerServicesProvider)|pdateDynamicServices)|Java(Bundle(Setup|Cleanup)|Setup(VirtualMachine)?|Needs(ToLoadClasses|VirtualMachine)|ClassesF(orBundle|romPath)|ObjectNamedInPath|ProvidesClasses)|P(oint(InRect|FromString)|erformService|lanarFromDepth|ageSize)|E(n(d(MapTableEnumeration|HashTableEnumeration)|umerate(MapTable|HashTable)|ableScreenUpdates)|qual(R(ects|anges)|Sizes|Points)|raseRect|xtraRefCount)|F(ileTypeForHFSTypeCode|ullUserName|r(ee(MapTable|HashTable)|ame(Rect(WithWidth(UsingOperation)?)?|Address)))|Wi(ndowList(ForContext)?|dth)|Lo(cationInRange|g(v|PageSize)?)|A(ccessibility(R(oleDescription(ForUIElement)?|aiseBadArgumentException)|Unignored(Children(ForOnlyChild)?|Descendant|Ancestor)|PostNotification|ActionDescription)|pplication(Main|Load)|vailableWindowDepths|ll(MapTable(Values|Keys)|HashTableObjects|ocate(MemoryPages|Collectable|Object))))\\b',
      name: 'support.function.cappuccino'
    },
    {
      match:
        '\\bCP(R(u(nLoop|ler(Marker|View))|e(sponder|cursiveLock|lativeSpecifier)|an(domSpecifier|geSpecifier))|G(etCommand|lyph(Generator|Storage|Info)|raphicsContext)|XML(Node|D(ocument|TD(Node)?)|Parser|Element)|M(iddleSpecifier|ov(ie(View)?|eCommand)|utable(S(tring|et)|C(haracterSet|opying)|IndexSet|D(ictionary|ata)|URLRequest|ParagraphStyle|A(ttributedString|rray))|e(ssagePort(NameServer)?|nu(Item(Cell)?|View)?|t(hodSignature|adata(Item|Query(ResultGroup|AttributeValueTuple)?)))|a(ch(BootstrapServer|Port)|trix))|B(itmapImageRep|ox|u(ndle|tton(Cell)?)|ezierPath|rowser(Cell)?)|S(hadow|c(anner|r(ipt(SuiteRegistry|C(o(ercionHandler|mmand(Description)?)|lassDescription)|ObjectSpecifier|ExecutionContext|WhoseTest)|oll(er|View)|een))|t(epper(Cell)?|atus(Bar|Item)|r(ing|eam))|imple(HorizontalTypesetter|CString)|o(cketPort(NameServer)?|und|rtDescriptor)|p(e(cifierTest|ech(Recognizer|Synthesizer)|ll(Server|Checker))|litView)|e(cureTextField(Cell)?|t(Command)?|archField(Cell)?|rializer|gmentedC(ontrol|ell))|lider(Cell)?|avePanel)|H(ost|TTP(Cookie(Storage)?|URLResponse)|elpManager)|N(ib(Con(nector|trolConnector)|OutletConnector)?|otification(Center|Queue)?|u(ll|mber(Formatter)?)|etService(Browser)?|ameSpecifier)|C(ha(ngeSpelling|racterSet)|o(n(stantString|nection|trol(ler)?|ditionLock)|d(ing|er)|unt(Command|edSet)|pying|lor(Space|P(ick(ing(Custom|Default)|er)|anel)|Well|List)?|m(p(oundPredicate|arisonPredicate)|boBox(Cell)?))|u(stomImageRep|rsor)|IImageRep|ell|l(ipView|o(seCommand|neCommand)|assDescription)|a(ched(ImageRep|URLResponse)|lendar(Date)?)|reateCommand)|T(hread|ypesetter|ime(Zone|r)|o(olbar(Item(Validations)?)?|kenField(Cell)?)|ext(Block|Storage|Container|Tab(le(Block)?)?|Input|View|Field(Cell)?|List|Attachment(Cell)?)?|a(sk|b(le(Header(Cell|View)|Column|View)|View(Item)?))|reeController)|I(n(dex(S(pecifier|et)|Path)|put(Manager|S(tream|erv(iceProvider|er(MouseTracker)?)))|vocation)|gnoreMisspelledWords|mage(Rep|Cell|View)?)|O(ut(putStream|lineView)|pen(GL(Context|Pixel(Buffer|Format)|View)|Panel)|bj(CTypeSerializationCallBack|ect(Controller)?))|D(i(st(antObject(Request)?|ributed(NotificationCenter|Lock))|ctionary|rectoryEnumerator)|ocument(Controller)?|e(serializer|cimalNumber(Behaviors|Handler)?|leteCommand)|at(e(Components|Picker(Cell)?|Formatter)?|a)|ra(wer|ggingInfo))|U(ser(InterfaceValidations|Defaults(Controller)?)|RL(Re(sponse|quest)|Handle(Client)?|C(onnection|ache|redential(Storage)?)|Download(Delegate)?|Prot(ocol(Client)?|ectionSpace)|AuthenticationChallenge(Sender)?)?|n(iqueIDSpecifier|doManager|archiver))|P(ipe|o(sitionalSpecifier|pUpButton(Cell)?|rt(Message|NameServer|Coder)?)|ICTImageRep|ersistentDocument|DFImageRep|a(steboard|nel|ragraphStyle|geLayout)|r(int(Info|er|Operation|Panel)|o(cessInfo|tocolChecker|perty(Specifier|ListSerialization)|gressIndicator|xy)|edicate))|E(numerator|vent|PSImageRep|rror|x(ception|istsCommand|pression))|V(iew(Animation)?|al(idated(ToobarItem|UserInterfaceItem)|ue(Transformer)?))|Keyed(Unarchiver|Archiver)|Qui(ckDrawView|tCommand)|F(ile(Manager|Handle|Wrapper)|o(nt(Manager|Descriptor|Panel)?|rm(Cell|atter)))|W(hoseSpecifier|indow(Controller)?|orkspace)|L(o(c(k(ing)?|ale)|gicalTest)|evelIndicator(Cell)?|ayoutManager)|A(ssertionHandler|nimation|ctionCell|ttributedString|utoreleasePool|TSTypesetter|ppl(ication|e(Script|Event(Manager|Descriptor)))|ffineTransform|lert|r(chiver|ray(Controller)?)))\\b',
      name: 'support.class.cappuccino'
    },
    {
      match:
        '\\bCP(R(ect(Edge)?|ange)|G(lyph(Relation|LayoutMode)?|radientType)|M(odalSession|a(trixMode|p(Table|Enumerator)))|B(itmapImageFileType|orderType|uttonType|ezelStyle|ackingStoreType|rowserColumnResizingType)|S(cr(oll(er(Part|Arrow)|ArrowPosition)|eenAuxiliaryOpaque)|tringEncoding|ize|ocketNativeHandle|election(Granularity|Direction|Affinity)|wapped(Double|Float)|aveOperationType)|Ha(sh(Table|Enumerator)|ndler(2)?)|C(o(ntrol(Size|Tint)|mp(ositingOperation|arisonResult))|ell(State|Type|ImagePosition|Attribute))|T(hreadPrivate|ypesetterGlyphInfo|i(ckMarkPosition|tlePosition|meInterval)|o(ol(TipTag|bar(SizeMode|DisplayMode))|kenStyle)|IFFCompression|ext(TabType|Alignment)|ab(State|leViewDropOperation|ViewType)|rackingRectTag)|ImageInterpolation|Zone|OpenGL(ContextAuxiliary|PixelFormatAuxiliary)|D(ocumentChangeType|atePickerElementFlags|ra(werState|gOperation))|UsableScrollerParts|P(oint|r(intingPageOrder|ogressIndicator(Style|Th(ickness|readInfo))))|EventType|KeyValueObservingOptions|Fo(nt(SymbolicTraits|TraitMask|Action)|cusRingType)|W(indow(OrderingMode|Depth)|orkspace(IconCreationOptions|LaunchOptions)|ritingDirection)|L(ineBreakMode|ayout(Status|Direction))|A(nimation(Progress|Effect)|ppl(ication(TerminateReply|DelegateReply|PrintReply)|eEventManagerSuspensionID)|ffineTransformStruct|lertStyle))\\b',
      name: 'support.type.cappuccino'
    },
    {
      match: '\\bCP(NotFound|Ordered(Ascending|Descending|Same))\\b',
      name: 'support.constant.cappuccino'
    },
    {
      match:
        '\\bCP(Menu(Did(RemoveItem|SendAction|ChangeItem|EndTracking|AddItem)|WillSendAction)|S(ystemColorsDidChange|plitView(DidResizeSubviews|WillResizeSubviews))|C(o(nt(extHelpModeDid(Deactivate|Activate)|rolT(intDidChange|extDid(BeginEditing|Change|EndEditing)))|lor(PanelColorDidChange|ListDidChange)|mboBox(Selection(IsChanging|DidChange)|Will(Dismiss|PopUp)))|lassDescriptionNeededForClass)|T(oolbar(DidRemoveItem|WillAddItem)|ext(Storage(DidProcessEditing|WillProcessEditing)|Did(BeginEditing|Change|EndEditing)|View(DidChange(Selection|TypingAttributes)|WillChangeNotifyingTextView))|ableView(Selection(IsChanging|DidChange)|ColumnDid(Resize|Move)))|ImageRepRegistryDidChange|OutlineView(Selection(IsChanging|DidChange)|ColumnDid(Resize|Move)|Item(Did(Collapse|Expand)|Will(Collapse|Expand)))|Drawer(Did(Close|Open)|Will(Close|Open))|PopUpButton(CellWillPopUp|WillPopUp)|View(GlobalFrameDidChange|BoundsDidChange|F(ocusDidChange|rameDidChange))|FontSetChanged|W(indow(Did(Resi(ze|gn(Main|Key))|M(iniaturize|ove)|Become(Main|Key)|ChangeScreen(|Profile)|Deminiaturize|Update|E(ndSheet|xpose))|Will(M(iniaturize|ove)|BeginSheet|Close))|orkspace(SessionDid(ResignActive|BecomeActive)|Did(Mount|TerminateApplication|Unmount|PerformFileOperation|Wake|LaunchApplication)|Will(Sleep|Unmount|PowerOff|LaunchApplication)))|A(ntialiasThresholdChanged|ppl(ication(Did(ResignActive|BecomeActive|Hide|ChangeScreenParameters|U(nhide|pdate)|FinishLaunching)|Will(ResignActive|BecomeActive|Hide|Terminate|U(nhide|pdate)|FinishLaunching))|eEventManagerWillProcessFirstEvent)))Notification\\b',
      name: 'support.constant.notification.cappuccino'
    },
    {
      match:
        '\\bCP(R(GB(ModeColorPanel|ColorSpaceModel)|ight(Mouse(D(own(Mask)?|ragged(Mask)?)|Up(Mask)?)|T(ext(Movement|Alignment)|ab(sBezelBorder|StopType))|ArrowFunctionKey)|ound(RectBezelStyle|Bankers|ed(BezelStyle|TokenStyle|DisclosureBezelStyle)|Down|Up|Plain|Line(CapStyle|JoinStyle))|un(StoppedResponse|ContinuesResponse|AbortedResponse)|e(s(izableWindowMask|et(CursorRectsRunLoopOrdering|FunctionKey))|ce(ssedBezelStyle|iver(sCantHandleCommandScriptError|EvaluationScriptError))|turnTextMovement|doFunctionKey|quiredArgumentsMissingScriptError|l(evancyLevelIndicatorStyle|ative(Before|After))|gular(SquareBezelStyle|ControlSize)|moveTraitFontAction)|a(n(domSubelement|geDateMode)|tingLevelIndicatorStyle|dio(ModeMatrix|Button)))|G(IFFileType|lyph(Below|Inscribe(B(elow|ase)|Over(strike|Below)|Above)|Layout(WithPrevious|A(tAPoint|gainstAPoint))|A(ttribute(BidiLevel|Soft|Inscribe|Elastic)|bove))|r(ooveBorder|eaterThan(Comparison|OrEqualTo(Comparison|PredicateOperatorType)|PredicateOperatorType)|a(y(ModeColorPanel|ColorSpaceModel)|dient(None|Con(cave(Strong|Weak)|vex(Strong|Weak)))|phiteControlTint)))|XML(N(o(tationDeclarationKind|de(CompactEmptyElement|IsCDATA|OptionsNone|Use(SingleQuotes|DoubleQuotes)|Pre(serve(NamespaceOrder|C(haracterReferences|DATA)|DTD|Prefixes|E(ntities|mptyElements)|Quotes|Whitespace|A(ttributeOrder|ll))|ttyPrint)|ExpandEmptyElement))|amespaceKind)|CommentKind|TextKind|InvalidKind|D(ocument(X(MLKind|HTMLKind|Include)|HTMLKind|T(idy(XML|HTML)|extKind)|IncludeContentTypeDeclaration|Validate|Kind)|TDKind)|P(arser(GTRequiredError|XMLDeclNot(StartedError|FinishedError)|Mi(splaced(XMLDeclarationError|CDATAEndStringError)|xedContentDeclNot(StartedError|FinishedError))|S(t(andaloneValueError|ringNot(StartedError|ClosedError))|paceRequiredError|eparatorRequiredError)|N(MTOKENRequiredError|o(t(ationNot(StartedError|FinishedError)|WellBalancedError)|DTDError)|amespaceDeclarationError|AMERequiredError)|C(haracterRef(In(DTDError|PrologError|EpilogError)|AtEOFError)|o(nditionalSectionNot(StartedError|FinishedError)|mment(NotFinishedError|ContainsDoubleHyphenError))|DATANotFinishedError)|TagNameMismatchError|In(ternalError|valid(HexCharacterRefError|C(haracter(RefError|InEntityError|Error)|onditionalSectionError)|DecimalCharacterRefError|URIError|Encoding(NameError|Error)))|OutOfMemoryError|D(ocumentStartError|elegateAbortedParseError|OCTYPEDeclNotFinishedError)|U(RI(RequiredError|FragmentError)|n(declaredEntityError|parsedEntityError|knownEncodingError|finishedTagError))|P(CDATARequiredError|ublicIdentifierRequiredError|arsedEntityRef(MissingSemiError|NoNameError|In(Internal(SubsetError|Error)|PrologError|EpilogError)|AtEOFError)|r(ocessingInstructionNot(StartedError|FinishedError)|ematureDocumentEndError))|E(n(codingNotSupportedError|tity(Ref(In(DTDError|PrologError|EpilogError)|erence(MissingSemiError|WithoutNameError)|LoopError|AtEOFError)|BoundaryError|Not(StartedError|FinishedError)|Is(ParameterError|ExternalError)|ValueRequiredError))|qualExpectedError|lementContentDeclNot(StartedError|FinishedError)|xt(ernalS(tandaloneEntityError|ubsetNotFinishedError)|raContentError)|mptyDocumentError)|L(iteralNot(StartedError|FinishedError)|T(RequiredError|SlashRequiredError)|essThanSymbolInAttributeError)|Attribute(RedefinedError|HasNoValueError|Not(StartedError|FinishedError)|ListNot(StartedError|FinishedError)))|rocessingInstructionKind)|E(ntity(GeneralKind|DeclarationKind|UnparsedKind|P(ar(sedKind|ameterKind)|redefined))|lement(Declaration(MixedKind|UndefinedKind|E(lementKind|mptyKind)|Kind|AnyKind)|Kind))|Attribute(N(MToken(sKind|Kind)|otationKind)|CDATAKind|ID(Ref(sKind|Kind)|Kind)|DeclarationKind|En(tit(yKind|iesKind)|umerationKind)|Kind))|M(i(n(XEdge|iaturizableWindowMask|YEdge|uteCalendarUnit)|terLineJoinStyle|ddleSubelement|xedState)|o(nthCalendarUnit|deSwitchFunctionKey|use(Moved(Mask)?|E(ntered(Mask)?|ventSubtype|xited(Mask)?))|veToBezierPathElement|mentary(ChangeButton|Push(Button|InButton)|Light(Button)?))|enuFunctionKey|a(c(intoshInterfaceStyle|OSRomanStringEncoding)|tchesPredicateOperatorType|ppedRead|x(XEdge|YEdge))|ACHOperatingSystem)|B(MPFileType|o(ttomTabsBezelBorder|ldFontMask|rderlessWindowMask|x(Se(condary|parator)|OldStyle|Primary))|uttLineCapStyle|e(zelBorder|velLineJoinStyle|low(Bottom|Top)|gin(sWith(Comparison|PredicateOperatorType)|FunctionKey))|lueControlTint|ack(spaceCharacter|tabTextMovement|ingStore(Retained|Buffered|Nonretained)|TabCharacter|wardsSearch|groundTab)|r(owser(NoColumnResizing|UserColumnResizing|AutoColumnResizing)|eakFunctionKey))|S(h(ift(JISStringEncoding|KeyMask)|ow(ControlGlyphs|InvisibleGlyphs)|adowlessSquareBezelStyle)|y(s(ReqFunctionKey|tem(D(omainMask|efined(Mask)?)|FunctionKey))|mbolStringEncoding)|c(a(nnedOption|le(None|ToFit|Proportionally))|r(oll(er(NoPart|Increment(Page|Line|Arrow)|Decrement(Page|Line|Arrow)|Knob(Slot)?|Arrows(M(inEnd|axEnd)|None|DefaultSetting))|Wheel(Mask)?|LockFunctionKey)|eenChangedEventType))|t(opFunctionKey|r(ingDrawing(OneShot|DisableScreenFontSubstitution|Uses(DeviceMetrics|FontLeading|LineFragmentOrigin))|eam(Status(Reading|NotOpen|Closed|Open(ing)?|Error|Writing|AtEnd)|Event(Has(BytesAvailable|SpaceAvailable)|None|OpenCompleted|E(ndEncountered|rrorOccurred)))))|i(ngle(DateMode|UnderlineStyle)|ze(DownFontAction|UpFontAction))|olarisOperatingSystem|unOSOperatingSystem|pecialPageOrder|e(condCalendarUnit|lect(By(Character|Paragraph|Word)|i(ng(Next|Previous)|onAffinity(Downstream|Upstream))|edTab|FunctionKey)|gmentSwitchTracking(Momentary|Select(One|Any)))|quareLineCapStyle|witchButton|ave(ToOperation|Op(tions(Yes|No|Ask)|eration)|AsOperation)|mall(SquareBezelStyle|C(ontrolSize|apsFontMask)|IconButtonBezelStyle))|H(ighlightModeMatrix|SBModeColorPanel|o(ur(Minute(SecondDatePickerElementFlag|DatePickerElementFlag)|CalendarUnit)|rizontalRuler|meFunctionKey)|TTPCookieAcceptPolicy(Never|OnlyFromMainDocumentDomain|Always)|e(lp(ButtonBezelStyle|KeyMask|FunctionKey)|avierFontAction)|PUXOperatingSystem)|Year(MonthDa(yDatePickerElementFlag|tePickerElementFlag)|CalendarUnit)|N(o(n(StandardCharacterSetFontMask|ZeroWindingRule|activatingPanelMask|LossyASCIIStringEncoding)|Border|t(ification(SuspensionBehavior(Hold|Coalesce|D(eliverImmediately|rop))|NoCoalescing|CoalescingOn(Sender|Name)|DeliverImmediately|PostToAllSessions)|PredicateType|EqualToPredicateOperatorType)|S(cr(iptError|ollerParts)|ubelement|pecifierError)|CellMask|T(itle|opLevelContainersSpecifierError|abs(BezelBorder|NoBorder|LineBorder))|I(nterfaceStyle|mage)|UnderlineStyle|FontChangeAction)|u(ll(Glyph|CellType)|m(eric(Search|PadKeyMask)|berFormatter(Round(Half(Down|Up|Even)|Ceiling|Down|Up|Floor)|Behavior(10|Default)|S(cientificStyle|pellOutStyle)|NoStyle|CurrencyStyle|DecimalStyle|P(ercentStyle|ad(Before(Suffix|Prefix)|After(Suffix|Prefix))))))|e(t(Services(BadArgumentError|NotFoundError|C(ollisionError|ancelledError)|TimeoutError|InvalidError|UnknownError|ActivityInProgress)|workDomainMask)|wlineCharacter|xt(StepInterfaceStyle|FunctionKey))|EXTSTEPStringEncoding|a(t(iveShortGlyphPacking|uralTextAlignment)|rrowFontMask))|C(hange(ReadOtherContents|GrayCell(Mask)?|BackgroundCell(Mask)?|Cleared|Done|Undone|Autosaved)|MYK(ModeColorPanel|ColorSpaceModel)|ircular(BezelStyle|Slider)|o(n(stantValueExpressionType|t(inuousCapacityLevelIndicatorStyle|entsCellMask|ain(sComparison|erSpecifierError)|rol(Glyph|KeyMask))|densedFontMask)|lor(Panel(RGBModeMask|GrayModeMask|HSBModeMask|C(MYKModeMask|olorListModeMask|ustomPaletteModeMask|rayonModeMask)|WheelModeMask|AllModesMask)|ListModeColorPanel)|reServiceDirectory|m(p(osite(XOR|Source(In|O(ut|ver)|Atop)|Highlight|C(opy|lear)|Destination(In|O(ut|ver)|Atop)|Plus(Darker|Lighter))|ressedFontMask)|mandKeyMask))|u(stom(SelectorPredicateOperatorType|PaletteModeColorPanel)|r(sor(Update(Mask)?|PointingDevice)|veToBezierPathElement))|e(nterT(extAlignment|abStopType)|ll(State|H(ighlighted|as(Image(Horizontal|OnLeftOrBottom)|OverlappingImage))|ChangesContents|Is(Bordered|InsetButton)|Disabled|Editable|LightsBy(Gray|Background|Contents)|AllowsMixedState))|l(ipPagination|o(s(ePathBezierPathElement|ableWindowMask)|ckAndCalendarDatePickerStyle)|ear(ControlTint|DisplayFunctionKey|LineFunctionKey))|a(seInsensitive(Search|PredicateOption)|n(notCreateScriptCommandError|cel(Button|TextMovement))|chesDirectory|lculation(NoError|Overflow|DivideByZero|Underflow|LossOfPrecision)|rriageReturnCharacter)|r(itical(Request|AlertStyle)|ayonModeColorPanel))|T(hick(SquareBezelStyle|erSquareBezelStyle)|ypesetter(Behavior|HorizontalTabAction|ContainerBreakAction|ZeroAdvancementAction|OriginalBehavior|ParagraphBreakAction|WhitespaceAction|L(ineBreakAction|atestBehavior))|i(ckMark(Right|Below|Left|Above)|tledWindowMask|meZoneDatePickerElementFlag)|o(olbarItemVisibilityPriority(Standard|High|User|Low)|pTabsBezelBorder|ggleButton)|IFF(Compression(N(one|EXT)|CCITTFAX(3|4)|OldJPEG|JPEG|PackBits|LZW)|FileType)|e(rminate(Now|Cancel|Later)|xt(Read(InapplicableDocumentTypeError|WriteErrorM(inimum|aximum))|Block(M(i(nimum(Height|Width)|ddleAlignment)|a(rgin|ximum(Height|Width)))|B(o(ttomAlignment|rder)|aselineAlignment)|Height|TopAlignment|P(ercentageValueType|adding)|Width|AbsoluteValueType)|StorageEdited(Characters|Attributes)|CellType|ured(RoundedBezelStyle|BackgroundWindowMask|SquareBezelStyle)|Table(FixedLayoutAlgorithm|AutomaticLayoutAlgorithm)|Field(RoundedBezel|SquareBezel|AndStepperDatePickerStyle)|WriteInapplicableDocumentTypeError|ListPrependEnclosingMarker))|woByteGlyphPacking|ab(Character|TextMovement|le(tP(oint(Mask|EventSubtype)?|roximity(Mask|EventSubtype)?)|Column(NoResizing|UserResizingMask|AutoresizingMask)|View(ReverseSequentialColumnAutoresizingStyle|GridNone|S(olid(HorizontalGridLineMask|VerticalGridLineMask)|equentialColumnAutoresizingStyle)|NoColumnAutoresizing|UniformColumnAutoresizingStyle|FirstColumnOnlyAutoresizingStyle|LastColumnOnlyAutoresizingStyle)))|rackModeMatrix)|I(n(sert(CharFunctionKey|FunctionKey|LineFunctionKey)|t(Type|ernalS(criptError|pecifierError))|dexSubelement|validIndexSpecifierError|formational(Request|AlertStyle)|PredicateOperatorType)|talicFontMask|SO(2022JPStringEncoding|Latin(1StringEncoding|2StringEncoding))|dentityMappingCharacterCollection|llegalTextMovement|mage(R(ight|ep(MatchesDevice|LoadStatus(ReadingHeader|Completed|InvalidData|Un(expectedEOF|knownType)|WillNeedAllData)))|Below|C(ellType|ache(BySize|Never|Default|Always))|Interpolation(High|None|Default|Low)|O(nly|verlaps)|Frame(Gr(oove|ayBezel)|Button|None|Photo)|L(oadStatus(ReadError|C(ompleted|ancelled)|InvalidData|UnexpectedEOF)|eft)|A(lign(Right|Bottom(Right|Left)?|Center|Top(Right|Left)?|Left)|bove)))|O(n(State|eByteGlyphPacking|OffButton|lyScrollerArrows)|ther(Mouse(D(own(Mask)?|ragged(Mask)?)|Up(Mask)?)|TextMovement)|SF1OperatingSystem|pe(n(GL(GO(Re(setLibrary|tainRenderers)|ClearFormatCache|FormatCacheSize)|PFA(R(obust|endererID)|M(inimumPolicy|ulti(sample|Screen)|PSafe|aximumPolicy)|BackingStore|S(creenMask|te(ncilSize|reo)|ingleRenderer|upersample|ample(s|Buffers|Alpha))|NoRecovery|C(o(lor(Size|Float)|mpliant)|losestPolicy)|OffScreen|D(oubleBuffer|epthSize)|PixelBuffer|VirtualScreenCount|FullScreen|Window|A(cc(umSize|elerated)|ux(Buffers|DepthStencil)|l(phaSize|lRenderers))))|StepUnicodeReservedBase)|rationNotSupportedForKeyS(criptError|pecifierError))|ffState|KButton|rPredicateType|bjC(B(itfield|oolType)|S(hortType|tr(ingType|uctType)|electorType)|NoType|CharType|ObjectType|DoubleType|UnionType|PointerType|VoidType|FloatType|Long(Type|longType)|ArrayType))|D(i(s(c(losureBezelStyle|reteCapacityLevelIndicatorStyle)|playWindowRunLoopOrdering)|acriticInsensitivePredicateOption|rect(Selection|PredicateModifier))|o(c(ModalWindowMask|ument(Directory|ationDirectory))|ubleType|wn(TextMovement|ArrowFunctionKey))|e(s(cendingPageOrder|ktopDirectory)|cimalTabStopType|v(ice(NColorSpaceModel|IndependentModifierFlagsMask)|eloper(Directory|ApplicationDirectory))|fault(ControlTint|TokenStyle)|lete(Char(acter|FunctionKey)|FunctionKey|LineFunctionKey)|moApplicationDirectory)|a(yCalendarUnit|teFormatter(MediumStyle|Behavior(10|Default)|ShortStyle|NoStyle|FullStyle|LongStyle))|ra(wer(Clos(ingState|edState)|Open(ingState|State))|gOperation(Generic|Move|None|Copy|Delete|Private|Every|Link|All)))|U(ser(CancelledError|D(irectory|omainMask)|FunctionKey)|RL(Handle(NotLoaded|Load(Succeeded|InProgress|Failed))|CredentialPersistence(None|Permanent|ForSession))|n(scaledWindowMask|cachedRead|i(codeStringEncoding|talicFontMask|fiedTitleAndToolbarWindowMask)|d(o(CloseGroupingRunLoopOrdering|FunctionKey)|e(finedDateComponent|rline(Style(Single|None|Thick|Double)|Pattern(Solid|D(ot|ash(Dot(Dot)?)?)))))|known(ColorSpaceModel|P(ointingDevice|ageOrder)|KeyS(criptError|pecifierError))|boldFontMask)|tilityWindowMask|TF8StringEncoding|p(dateWindowsRunLoopOrdering|TextMovement|ArrowFunctionKey))|J(ustifiedTextAlignment|PEG(2000FileType|FileType)|apaneseEUC(GlyphPacking|StringEncoding))|P(o(s(t(Now|erFontMask|WhenIdle|ASAP)|iti(on(Replace|Be(fore|ginning)|End|After)|ve(IntType|DoubleType|FloatType)))|pUp(NoArrow|ArrowAt(Bottom|Center))|werOffEventType|rtraitOrientation)|NGFileType|ush(InCell(Mask)?|OnPushOffButton)|e(n(TipMask|UpperSideMask|PointingDevice|LowerSideMask)|riodic(Mask)?)|P(S(caleField|tatus(Title|Field)|aveButton)|N(ote(Title|Field)|ame(Title|Field))|CopiesField|TitleField|ImageButton|OptionsButton|P(a(perFeedButton|ge(Range(To|From)|ChoiceMatrix))|reviewButton)|LayoutButton)|lainTextTokenStyle|a(useFunctionKey|ragraphSeparatorCharacter|ge(DownFunctionKey|UpFunctionKey))|r(int(ing(ReplyLater|Success|Cancelled|Failure)|ScreenFunctionKey|erTable(NotFound|OK|Error)|FunctionKey)|o(p(ertyList(XMLFormat|MutableContainers(AndLeaves)?|BinaryFormat|Immutable|OpenStepFormat)|rietaryStringEncoding)|gressIndicator(BarStyle|SpinningStyle|Preferred(SmallThickness|Thickness|LargeThickness|AquaThickness)))|e(ssedTab|vFunctionKey))|L(HeightForm|CancelButton|TitleField|ImageButton|O(KButton|rientationMatrix)|UnitsButton|PaperNameButton|WidthForm))|E(n(terCharacter|d(sWith(Comparison|PredicateOperatorType)|FunctionKey))|v(e(nOddWindingRule|rySubelement)|aluatedObjectExpressionType)|qualTo(Comparison|PredicateOperatorType)|ra(serPointingDevice|CalendarUnit|DatePickerElementFlag)|x(clude(10|QuickDrawElementsIconCreationOption)|pandedFontMask|ecuteFunctionKey))|V(i(ew(M(in(XMargin|YMargin)|ax(XMargin|YMargin))|HeightSizable|NotSizable|WidthSizable)|aPanelFontAction)|erticalRuler|a(lidationErrorM(inimum|aximum)|riableExpressionType))|Key(SpecifierEvaluationScriptError|Down(Mask)?|Up(Mask)?|PathExpressionType|Value(MinusSetMutation|SetSetMutation|Change(Re(placement|moval)|Setting|Insertion)|IntersectSetMutation|ObservingOption(New|Old)|UnionSetMutation|ValidationError))|QTMovie(NormalPlayback|Looping(BackAndForthPlayback|Playback))|F(1(1FunctionKey|7FunctionKey|2FunctionKey|8FunctionKey|3FunctionKey|9FunctionKey|4FunctionKey|5FunctionKey|FunctionKey|0FunctionKey|6FunctionKey)|7FunctionKey|i(nd(PanelAction(Replace(A(ndFind|ll(InSelection)?))?|S(howFindPanel|e(tFindString|lectAll(InSelection)?))|Next|Previous)|FunctionKey)|tPagination|le(Read(No(SuchFileError|PermissionError)|CorruptFileError|In(validFileNameError|applicableStringEncodingError)|Un(supportedSchemeError|knownError))|HandlingPanel(CancelButton|OKButton)|NoSuchFileError|ErrorM(inimum|aximum)|Write(NoPermissionError|In(validFileNameError|applicableStringEncodingError)|OutOfSpaceError|Un(supportedSchemeError|knownError))|LockingError)|xedPitchFontMask)|2(1FunctionKey|7FunctionKey|2FunctionKey|8FunctionKey|3FunctionKey|9FunctionKey|4FunctionKey|5FunctionKey|FunctionKey|0FunctionKey|6FunctionKey)|o(nt(Mo(noSpaceTrait|dernSerifsClass)|BoldTrait|S(ymbolicClass|criptsClass|labSerifsClass|ansSerifClass)|C(o(ndensedTrait|llectionApplicationOnlyMask)|larendonSerifsClass)|TransitionalSerifsClass|I(ntegerAdvancementsRenderingMode|talicTrait)|O(ldStyleSerifsClass|rnamentalsClass)|DefaultRenderingMode|U(nknownClass|IOptimizedTrait)|Panel(S(hadowEffectModeMask|t(andardModesMask|rikethroughEffectModeMask)|izeModeMask)|CollectionModeMask|TextColorEffectModeMask|DocumentColorEffectModeMask|UnderlineEffectModeMask|FaceModeMask|All(ModesMask|EffectsModeMask))|ExpandedTrait|VerticalTrait|F(amilyClassMask|reeformSerifsClass)|Antialiased(RenderingMode|IntegerAdvancementsRenderingMode))|cusRing(Below|Type(None|Default|Exterior)|Only|Above)|urByteGlyphPacking|rm(attingError(M(inimum|aximum))?|FeedCharacter))|8FunctionKey|unction(ExpressionType|KeyMask)|3(1FunctionKey|2FunctionKey|3FunctionKey|4FunctionKey|5FunctionKey|FunctionKey|0FunctionKey)|9FunctionKey|4FunctionKey|P(RevertButton|S(ize(Title|Field)|etButton)|CurrentField|Preview(Button|Field))|l(oat(ingPointSamplesBitmapFormat|Type)|agsChanged(Mask)?)|axButton|5FunctionKey|6FunctionKey)|W(heelModeColorPanel|indow(s(NTOperatingSystem|CP125(1StringEncoding|2StringEncoding|3StringEncoding|4StringEncoding|0StringEncoding)|95(InterfaceStyle|OperatingSystem))|M(iniaturizeButton|ovedEventType)|Below|CloseButton|ToolbarButton|ZoomButton|Out|DocumentIconButton|ExposedEventType|Above)|orkspaceLaunch(NewInstance|InhibitingBackgroundOnly|Default|PreferringClassic|WithoutA(ctivation|ddingToRecents)|A(sync|nd(Hide(Others)?|Print)|llowingClassicStartup))|eek(day(CalendarUnit|OrdinalCalendarUnit)|CalendarUnit)|a(ntsBidiLevels|rningAlertStyle)|r(itingDirection(RightToLeft|Natural|LeftToRight)|apCalendarComponents))|L(i(stModeMatrix|ne(Moves(Right|Down|Up|Left)|B(order|reakBy(C(harWrapping|lipping)|Truncating(Middle|Head|Tail)|WordWrapping))|S(eparatorCharacter|weep(Right|Down|Up|Left))|ToBezierPathElement|DoesntMove|arSlider)|teralSearch|kePredicateOperatorType|ghterFontAction|braryDirectory)|ocalDomainMask|e(ssThan(Comparison|OrEqualTo(Comparison|PredicateOperatorType)|PredicateOperatorType)|ft(Mouse(D(own(Mask)?|ragged(Mask)?)|Up(Mask)?)|T(ext(Movement|Alignment)|ab(sBezelBorder|StopType))|ArrowFunctionKey))|a(yout(RightToLeft|NotDone|CantFit|OutOfGlyphs|Done|LeftToRight)|ndscapeOrientation)|ABColorSpaceModel)|A(sc(iiWithDoubleByteEUCGlyphPacking|endingPageOrder)|n(y(Type|PredicateModifier|EventMask)|choredSearch|imation(Blocking|Nonblocking(Threaded)?|E(ffect(DisappearingItemDefault|Poof)|ase(In(Out)?|Out))|Linear)|dPredicateType)|t(Bottom|tachmentCharacter|omicWrite|Top)|SCIIStringEncoding|d(obe(GB1CharacterCollection|CCP1CharacterCollection|Japan(1CharacterCollection|2CharacterCollection)|Korea1CharacterCollection)|dTraitFontAction|minApplicationDirectory)|uto(saveOperation|Pagination)|pp(lication(SupportDirectory|D(irectory|e(fined(Mask)?|legateReply(Success|Cancel|Failure)|activatedEventType))|ActivatedEventType)|KitDefined(Mask)?)|l(ternateKeyMask|pha(ShiftKeyMask|NonpremultipliedBitmapFormat|FirstBitmapFormat)|ert(SecondButtonReturn|ThirdButtonReturn|OtherReturn|DefaultReturn|ErrorReturn|FirstButtonReturn|AlternateReturn)|l(ScrollerParts|DomainsMask|PredicateModifier|LibrariesDirectory|ApplicationsDirectory))|rgument(sWrongScriptError|EvaluationScriptError)|bove(Bottom|Top)|WTEventType))\\b',
      name: 'support.constant.cappuccino'
    },
    {include: '#bracketed_content'},
    {include: 'source.js'}
  ],
  repository: {
    bracketed_content: {
      begin: '\\[',
      beginCaptures: {0: {name: 'punctuation.section.scope.begin.js.objj'}},
      end: '\\]',
      endCaptures: {0: {name: 'punctuation.section.scope.end.js.objj'}},
      name: 'meta.bracketed.js.objj',
      patterns: [
        {
          begin: '(?=\\w)(?<=[\\w\\])"] )(\\w+(?:(:)|(?=\\])))',
          beginCaptures: {
            1: {name: 'support.function.any-method.js.objj'},
            2: {name: 'punctuation.separator.arguments.js.objj'}
          },
          end: '(?=\\])',
          name: 'meta.function-call.js.objj',
          patterns: [
            {
              captures: {1: {name: 'punctuation.separator.arguments.js.objj'}},
              match: '\\b\\w+(:)',
              name: 'support.function.any-method.name-of-parameter.js.objj'
            },
            {include: '#special_variables'},
            {include: '$base'}
          ]
        },
        {include: '#special_variables'},
        {include: '$base'}
      ]
    },
    comment: {
      patterns: [
        {
          begin: '/\\*',
          captures: {0: {name: 'punctuation.definition.comment.js.objj'}},
          end: '\\*/',
          name: 'comment.block.js.objj'
        },
        {
          begin: '(^[ \\t]+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.js.objj'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '//',
              beginCaptures: {
                0: {name: 'punctuation.definition.comment.js.objj'}
              },
              end: '\\n',
              name: 'comment.line.double-slash.js.objj',
              patterns: [
                {
                  match: '(?>\\\\\\s*\\n)',
                  name: 'punctuation.separator.continuation.js.objj'
                }
              ]
            }
          ]
        }
      ]
    },
    method: {
      begin: '^(-|\\+)\\s*',
      end: '(?=\\{)|;',
      name: 'meta.function.js.objj',
      patterns: [
        {
          begin: '(\\()',
          captures: {
            1: {name: 'punctuation.definition.type.js.objj'},
            2: {name: 'entity.name.function.js.objj'}
          },
          end: '(\\))\\s*(\\w+\\b)',
          name: 'meta.return-type.js.objj',
          patterns: [
            {include: '#protocol_list'},
            {include: '#protocol_type_qualifier'},
            {include: '$base'}
          ]
        },
        {
          match: '\\b\\w+(?=:)',
          name: 'entity.name.function.name-of-parameter.js.objj'
        },
        {
          begin: '((:))\\s*(\\()',
          beginCaptures: {
            1: {name: 'entity.name.function.name-of-parameter.js.objj'},
            2: {name: 'punctuation.separator.arguments.js.objj'},
            3: {name: 'punctuation.definition.type.js.objj'}
          },
          end: '(\\))\\s*(\\w+\\b)?',
          endCaptures: {
            1: {name: 'punctuation.definition.type.js.objj'},
            2: {name: 'variable.parameter.function.js.objj'}
          },
          name: 'meta.argument-type.js.objj',
          patterns: [
            {include: '#protocol_list'},
            {include: '#protocol_type_qualifier'},
            {include: '$base'}
          ]
        },
        {include: '#comment'}
      ]
    },
    protocol_list: {
      begin: '(<)',
      beginCaptures: {1: {name: 'punctuation.section.scope.begin.js.objj'}},
      end: '(>)',
      endCaptures: {1: {name: 'punctuation.section.scope.end.js.objj'}},
      name: 'meta.protocol-list.js.objj',
      patterns: [
        {
          match:
            '\\bCP(GlyphStorage|M(utableCopying|enuItem)|C(hangeSpelling|o(ding|pying|lorPicking(Custom|Default)))|T(oolbarItemValidations|ext(Input|AttachmentCell))|I(nputServ(iceProvider|erMouseTracker)|gnoreMisspelledWords)|Obj(CTypeSerializationCallBack|ect)|D(ecimalNumberBehaviors|raggingInfo)|U(serInterfaceValidations|RL(HandleClient|DownloadDelegate|ProtocolClient|AuthenticationChallengeSender))|Validated(ToobarItem|UserInterfaceItem)|Locking)\\b',
          name: 'support.other.protocol.js.objj'
        }
      ]
    },
    protocol_type_qualifier: {
      match: '\\b(in|out|inout|oneway|bycopy|byref)\\b',
      name: 'storage.modifier.protocol.js.objj'
    },
    special_variables: {
      patterns: [
        {match: '\\b_cmd\\b', name: 'variable.other.selector.js.objj'},
        {match: '\\b(self|super)\\b', name: 'variable.language.js.objj'}
      ]
    }
  },
  scopeName: 'source.js.objj'
}

export default grammar
