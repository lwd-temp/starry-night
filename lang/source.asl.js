// This is a TextMate grammar distributed by `starry-night`.
// This grammar is developed at
// <https://github.com/sebadur/language-asl>
// and licensed `mit`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.asl', '.dsl'],
  names: ['asl'],
  patterns: [
    {begin: '//', end: '\\n', name: 'comment.line.double-slash.asl'},
    {begin: '/\\*', end: '\\*/', name: 'comment.block.asl'},
    {
      match:
        '"([^\\"]|\\\\(x|X)[0-9a-fA-F]{1,2}|\\\\\'|\\\\"|\\\\a|\\\\b|\\\\f|\\\\n|\\\\r|\\\\t|\\\\v|\\\\\\\\|\\[0-7]{1,3})*"',
      name: 'string.quoted.double.asl'
    },
    {
      match: '\\+|/|%|\\*|-|<<|>>|&|\\||\\^|~|\\+\\+|--',
      name: 'punctuation.math.asl'
    },
    {match: '==|!=|<|>|<=|>=|&&|\\|\\||!', name: 'punctuation.logical.asl'},
    {
      match: '=|\\+=|/=|%=|\\*=|-=|<<=|>>=|&=|\\|=|\\^=',
      name: 'punctuation.assign.asl'
    },
    {match: '\\[|\\]|\\(|\\)|\\{|\\}', name: 'meta.brackets.asl'},
    {
      match:
        '\\b(AccessAs|Acquire|Add|Alias|And|Arg[0-9]|BankField|Break|BreakPoint|Buffer|Case|Concatenate|ConcatenateResTemplate|CondRefOf|Connection|Continue|CopyObject|CreateBitField|CreateByteField|CreateDWordField|CreateField|CreateQWordField|CreateWordField|DataTableRegion|Debug|Decrement|Default|DefinitionBlock|DerefOf|Device|Divide|DMA|DWordIO|DWordMemory|DWordSpace|EisaId|Else|ElseIf|EndDependentFn|Event|ExtendedIO|ExtendedMemory|ExtendedSpace|External|Fatal|Field|FindSetLeftBit|FindSetRightBit|FixedDMA|FixedIO|Fprintf|FromBCD|Function|GpioInt|GpioIo|I2CSerialBusV2|If|Include|Increment|Index|IndexField|Interrupt|IO|IRQ|IRQNoFlags|LAnd|LEqual|LGreater|LGreaterEqual|LLess|LLessEqual|LNot|LNotEqual|Load|LoadTable|Local[0-9]|LOr|Match|Memory24|Memory32|Memory32Fixed|Method|Mid|Mod|Multiply|Mutex|Name|NAnd|NoOp|NOr|Not|Notify|ObjectType|Offset|OperationRegion|Or|Package|PowerResource|Printf|Processor|QWordIO|QWordMemory|QWordSpace|RawDataBuffer|RefOf|Register|Release|Reset|ResourceTemplate|Return|Scope|ShiftLeft|ShiftRight|Signal|SizeOf|Sleep|SPISerialbusV2|Stall|StartDependentFn|StartDependentFnNoPri|Store|Subtract|Switch|ThermalZone|Timer|ToBCD|ToBuffer|ToDecimalString|ToHexString|ToInteger|ToPLD|ToString|ToUUID|Unicode|Unload|UARTSerialBusV2|VendorLong|VendorShort|Wait|While|WordBusNumber|WordIO|WordSpace|Xor)\\b',
      name: 'support.function.any-method.asl'
    },
    {
      match:
        '\\b(_AC[0-9]|_ADR|_AEI|_ALC|_ALI|_ALN|_ALP|_ALR|_ALT|_ART|_ASI|_ASZ|_ATT|_BAS|_BBN|_BCL|_BCM|_BCT|_BDN|_BIF|_BI[0-9]|_BLT|_BM|_BMA|_BMC|_BMD|_BMS|_BQC|_BST|_BTH|_BTM|_BTP|_CBA|_CDM|_CID|_CLS|_CPC|_CRS|_CRT|_CSD|_CST|_CWS|_DBT|_DCK|_DCS|_DDC|_DDN|_DEC|_DEP|_DGS|_DIS|_DLM|_DMA|_DOS|_DPL|_DRS|_DSD|_DSM|_DSS|_DSW|_DTI|_E[0-9][0-9]|_EC|_EDL|_EJD|_EJ[0-9]|_END|_EVT|_FDE|_FDI|_FDM|_FIF|_FIT|_FI[0-9]|_FLC|_FPS|_FSL|_GAI|_GCP|_GHL|_GL|_GLK|_GPD|_GPE|_GRA|_GRT|_GSB|_GTF|_GTM|_GWS|_HE|_HID|_HOT|_HPP|_HP[0-9]|_HRV|_IFT|_INI|_IOR|_IRC|_L[0-9][0-9]|_LCK|_LEN|_LID|_LIN|_LL|_LPI|_MAF|_MAT|_MA[0-9]|_MBM|_MEM|_MIF|_MIN|_MLS|_MOD|_MSG|_MSM|_MTL|_MTP|_NTT|_OFF|_ON|_OS|_OSI|_OST|_PAI|_PAR|_PCL|_PCT|_PDC|_PDL|_PHA|_PIC|_PIF|_PIN|_PLD|_PMC|_PMD|_PMM|_POL|_PPC|_PPE|_PPI|_PR|_PR0|_PR2|_PR3|_PRE|_PRL|_PRR|_PRS|_PRT|_PRW|_PS0|_PS1|_PS2|_PS3|_PSC|_PSD|_PSE|_PSL|_PSR|_PSS|_PSV|_PSW|_PTC|_PTP|_PTS|_PUR|_P[0-9]M|_RBO|_RBW|_RDI|_REG|_REV|_RMV|_RNG|_ROM|_RST|_RT|_RTV|_RW|_R[0-9]L|_S0|_S1|_S2|_S3|_S4|_S5|_S1D|_S2D|_S3D|_S4D|_S1W|_S2W|_S3W|_S4W|_SB|_SBS|_SCP|_SDD|_SEG|_SHL|_SHR|_SI|_SIZ|_SLI|_SLV|_SPD|_SPE|_SRS|_SRT|_SRV|_STA|_STB|_STM|_STR|_STV|_SUB|_SUN|_SWS|_T_[0-9]|_TC1|_TC2|_TDL|_TFP|_TIP|_TIV|_TMP|_TPC|_TPT|_TRA|_TRS|_TRT|_TSD|_TSF|_TSN|_TSP|_TSS|_TTP|_TTS|_T[0-9]L|_TYP|_TZ|_TZD|_TZM|_TZP|_UID|_UPC|_UPD|_UPP|_VEN|_VPO|_WAK|_W[0-9][0-9])\\b',
      name: 'variable.other.asl'
    },
    {
      match:
        '\\b(AttribQuick|AttribSendReceive|AttribByte|AttribBytes|AttribRawBytes|AttribRawProcessBytes|AttribWord|AttribBlock|AttribProcessCall|AttribBlockProcessCall|AnyAcc|ByteAcc|WordAcc|DWordAcc|QWordAcc|BufferAcc|AddressRangeMemory|AddressRangeReserved|AddressRangeNVS|AddressRangeACPI|RegionSpaceKeyword|FFixedHW|PCC|AddressingMode7Bit|AddressingMode10Bit|DataBitsFive|DataBitsSix|DataBitsSeven|DataBitsEight|DataBitsNine|BusMaster|NotBusMaster|ClockPhaseFirst|ClockPhaseSecond|ClockPolarityLow|ClockPolarityHigh|SubDecode|PosDecode|BigEndianing|LittleEndian|FlowControlNone|FlowControlXon|FlowControlHardware|Edge|Level|ActiveHigh|ActiveLow|ActiveBoth|Decode16|Decode10|IoRestrictionNone|IoRestrictionInputOnly|IoRestrictionOutputOnly|IoRestrictionNoneAndPreserve|Lock|NoLock|MTR|MEQ|MLE|MLT|MGE|MGT|MaxFixed|MaxNotFixed|Cacheable|WriteCombining|Prefetchable|NonCacheable|MinFixed|MinNotFixed|UnknownObj|IntObj|StrObj|BuffObj|PkgObj|FieldUnitObj|DeviceObj|EventObj|MethodObj|MutexObj|OpRegionObj|PowerResObj|ProcessorObj|ThermalZoneObj|BuffFieldObj|DDBHandleObj|ParityTypeNone|ParityTypeSpace|ParityTypeMark|ParityTypeOdd|ParityTypeEven|PullDefault|PullUp|PullDown|PullNone|PolarityHigh|PolarityLow|ISAOnlyRanges|NonISAOnlyRanges|EntireRange|ReadWrite|ReadOnly|UserDefRegionSpace|SystemIO|SystemMemory|PCI_Config|EmbeddedControl|SMBus|SystemCMOS|PciBarTarget|IPMI|GeneralPurposeIO|GenericSerialBus|ResourceConsumer|ResourceProducer|Serialized|NotSerialized|Shared|Exclusive|SharedAndWake|ExclusiveAndWake|ControllerInitiated|DeviceInitiated|StopBitsZero|StopBitsOne|StopBitsOnePlusHalf|StopBitsTwo|Width8Bit|Width16Bit|Width32Bit|Width64Bit|Width128Bit|Width256Bit|SparseTranslation|DenseTranslation|TypeTranslation|TypeStatic|Preserve|WriteAsOnes|WriteAsZeros|Transfer8|Transfer16|Transfer8_16|ThreeWireMode|FourWireMode)\\b',
      name: 'keyword.other.asl'
    },
    {
      match: '\\b((0(x|X)[0-9a-fA-F]+)|(0[0-7]+)|[0-9]|One|Ones|Zero)\\b',
      name: 'constant.numeric.asl'
    },
    {match: '\\b(Revision)\\b', name: 'constant.other.asl'}
  ],
  scopeName: 'source.asl'
}

export default grammar
