// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed permissive.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.lsl', '.lslp'],
  names: ['lsl'],
  patterns: [
    {include: '#round-brackets'},
    {include: '#comments'},
    {match: '==|!=', name: 'keyword.operator.comparison.lsl'},
    {match: '[-+*/%]?=', name: 'keyword.operator.assignment.lsl'},
    {match: '\\|\\|?|\\^|&&?|!|~', name: 'keyword.operator.logical.lsl'},
    {
      match: '\\+\\+?|\\-\\-?|<<|>>|<=|>=|<|>|\\*|/|%',
      name: 'keyword.operator.arithmetic.lsl'
    },
    {include: '#numeric'},
    {
      captures: {
        1: {name: 'keyword.control.jump.lsl'},
        2: {name: 'constant.other.reference.label.lsl'}
      },
      match: '\\b(jump)\\s+([a-zA-Z_][a-zA-Z_0-9]*\\b)'
    },
    {
      match:
        '\\b(default|state|for|do|while|if|else|jump|return|event|print)\\b',
      name: 'keyword.control.lsl'
    },
    {
      match: '\\b(integer|float|string|key|vector|rotation|quaternion|list)\\b',
      name: 'storage.type.lsl'
    },
    {match: '\\b(TRUE|FALSE)\\b', name: 'constant.language.boolean.lsl'},
    {
      match:
        '\\b(l(?:and_collision(?:_(?:start|end))?|i(?:nk_message|sten))|t(?:ouch(?:_(?:start|end))?|ransaction_result|imer)|c(?:o(?:llision(?:_(?:start|end))?|ntrol)|hanged)|e(?:xperience_permissions(?:_denied)?|mail)|r(?:un_time_permissions|emote_data)|no(?:t_a(?:t_ro)?t_target|_sensor)|s(?:tate_e(?:ntry|xit)|ensor)|mo(?:ving_(?:start|end)|ney)|at(?:(?:_rot)?_target|tach)|http_re(?:sponse|quest)|o(?:bject|n)_rez|path_update|dataserver)\\b',
      name: 'constant.language.events.lsl'
    },
    {
      match:
        '(?x)\n\t\t\t\t\\b(ll(?:\n\t\t\t\t\tG(?:e(?:t(?:P(?:arcel(?:M(?:axPrims|usicURL)|Prim(?:Owners|Count)|(?:Detail|Flag)s)|(?:rim(?:Media|itive)Param|o)s|ermissions(?:Key)?|hysicsMaterial)|S(?:ta(?:t(?:icPath|us)|rtParameter)|im(?:ulatorHostname|Stats)|c(?:ript(?:Stat|Nam)|al)e|u(?:nDirection|bString)|PMaxMemory)|L(?:i(?:nk(?:N(?:umber(?:OfSides)?|ame)|PrimitiveParams|Media|Key)|st(?:EntryType|Length))|ocal(?:Pos|Rot)|andOwnerAt)|A(?:n(?:imation(?:Override|List)?|dResetTime)|gent(?:L(?:anguage|ist)|Info|Size)|ttached(?:List)?|ccel|lpha)|R(?:egion(?:F(?:lags|PS)|TimeDilation|AgentCount|Corner|Name)|o(?:ot(?:Posi|Rota)tion|t))|O(?:bject(?:P(?:rimCount|ermMask)|De(?:tails|sc)|Mass|Name)|wner(?:Key)?|mega)|N(?:umberOf(?:(?:NotecardLin|Sid)e|Prim)s|otecardLine|extEmail)|C(?:amera(?:Pos|Rot)|losestNavPoint|(?:reat|ol)or|enterOfMass)|T(?:exture(?:(?:Offse|Ro)t|Scale)?|ime(?:OfDay|stamp)?|orque)|M(?:a(?:xScaleFactor|ss(?:MKS)?)|inScaleFactor|emoryLimit)|Inventory(?:N(?:umber|ame)|PermMask|Creator|Type|Key)|E(?:xperience(?:ErrorMessage|Details)|n(?:ergy|v))|U(?:se(?:dMemory|rname)|nixTime)|F(?:ree(?:Memory|URLs)|orce)|G(?:eometricCenter|MTclock)|D(?:isplayNam|at)e|BoundingBox|HTTPHeader|Wallclock|Key|Vel)|nerateKey)|round(?:(?:Norma|Repe)l|Contour|Slope)?|ive(?:Inventory(?:List)?|Money))\n\t\t\t\t  | S(?:e(?:t(?:L(?:ink(?:PrimitiveParams(?:Fast)?|Texture(?:Anim)?|C(?:amera|olor)|(?:Alph|Medi)a)|ocalRot)|P(?:(?:rim(?:Media|itive)Param|o)s|a(?:rcelMusicURL|yPrice)|hysicsMaterial)|Ve(?:hicle(?:(?:Rotation|Vector)Param|Fl(?:oatParam|ags)|Type)|locity)|C(?:amera(?:(?:Eye|At)Offset|Params)|o(?:ntentType|lor)|lickAction)|S(?:ound(?:Queueing|Radius)|c(?:riptStat|al)e|itText|tatus)|T(?:ext(?:ure(?:Anim)?)?|o(?:uchText|rque)|imerEvent)|A(?:n(?:imationOverride|gularVelocity)|lpha)|R(?:e(?:moteScriptAccessPin|gionPos)|ot)|(?:Forc(?:eAndTorqu)?|Damag)e|(?:HoverHeigh|MemoryLimi)t|Object(?:Desc|Name)|KeyframedMotion|Buoyancy)|n(?:sor(?:Re(?:move|peat))?|dRemoteData))|t(?:op(?:(?:MoveToTarge|LookA)t|Animation|Hover|Sound)|ring(?:T(?:oBase64|rim)|Length)|artAnimation)|c(?:ale(?:ByFactor|Texture)|ript(?:Profil|Dang)er)|i(?:t(?:OnLink|Target)|n)|a(?:meGroup|y)|ubStringIndex|(?:hou|qr)t|HA1String|leep)\n\t\t\t\t  | R(?:e(?:quest(?:(?:Experience)?Permissions|S(?:imulatorData|ecureURL)|(?:Inventory|Agent)Data|U(?:sername|RL)|DisplayName)|mo(?:ve(?:FromLand(?:Pass|Ban)List|VehicleFlags|Inventory)|te(?:LoadScriptPin|DataReply))|set(?:(?:Land(?:Pass|Ban)Lis|(?:Other)?Scrip)t|(?:AnimationOverrid|Tim)e)|turnObjectsBy(?:Owner|ID)|lease(?:Controls|URL)|z(?:AtRoo|Objec)t|gionSay(?:To)?|adKeyValue)|o(?:t(?:2(?:A(?:ngle|xis)|Euler|Left|Fwd|Up)|Target(?:Remove)?|ateTexture|Between|LookAt)|und))\n\t\t\t\t  | L(?:i(?:st(?:2(?:(?:Intege|Vecto)r|List(?:Strided)?|(?:Floa|Ro)t|String|Json|CSV|Key)|R(?:eplaceList|andomize)|en(?:Control|Remove)?|(?:Insert|Find)List|S(?:tatistics|ort))|nk(?:ParticleSystem|SitTarget))|o(?:o(?:pSound(?:Master|Slave)?|kAt)|g(?:10)?|adURL))\n\t\t\t\t  | D(?:e(?:t(?:ected(?:T(?:ouch(?:(?:Bin|N)ormal|Face|Pos|ST|UV)|ype)|(?:LinkNumb|Own)er|Gr(?:oup|ab)|Name|Key|Pos|Rot|Vel)|achFromAvatar)|lete(?:Sub(?:String|List)|Character|KeyValue))|ataSizeKeyValue|umpList2String|i(?:alog|e))\n\t\t\t\t  | A(?:(?:vatarOn(?:Link)?SitTarge|x(?:isAngle|es)2Ro)t|(?:pply(?:Rotational)?Impuls|gentInExperienc)e|d(?:dToLand(?:Pass|Ban)List|justSoundVolume)|t(?:tachToAvatar(?:Temp)?|an2)|(?:ngleBetwee|si)n|llowInventoryDrop|(?:co|b)s)\n\t\t\t\t  | P(?:a(?:r(?:celMedia(?:CommandList|Query)|seString(?:KeepNulls|2List)|ticleSystem)|(?:ss(?:Collision|Touche)|trolPoint)s)|laySound(?:Slave)?|u(?:shObject|rsue)|reloadSound|ow)\n\t\t\t\t  | C(?:l(?:ear(?:(?:Link|Prim)Media|CameraParams)|oseRemoteDataChannel)|reate(?:Character|KeyValue|Link)|o(?:llision(?:Filter|Sound)|s)|SV2List|astRay|eil)\n\t\t\t\t  | T(?:r(?:iggerSoun(?:dLimite)?d|ansferLindenDollars)|e(?:leportAgent(?:GlobalCoords|Home)?|xtBox)|a(?:rget(?:Remove|Omega)?|keControls|n)|o(?:Low|Upp)er)\n\t\t\t\t  | M(?:a(?:nageEstateAccess|pDestination)|o(?:d(?:ifyLand|Pow)|veToTarget)|essageLinked|inEventDelay|D5String)\n\t\t\t\t  | E(?:(?:xecCharacterCm|jectFromLan|dgeOfWorl)d|scapeURL|uler2Rot|mail|vade)\n\t\t\t\t  | O(?:penRemoteDataChannel|ffsetTexture|verMyLand|wnerSay)\n\t\t\t\t  | B(?:ase64To(?:Integer|String)|reak(?:AllLinks|Link))\n\t\t\t\t  | U(?:pdate(?:Character|KeyValue)|n(?:escapeURL|Sit))\n\t\t\t\t  | In(?:s(?:tantMessage|ertString)|tegerToBase64)\n\t\t\t\t  | F(?:l(?:eeFrom|oor)|orceMouselook|rand|abs)\n\t\t\t\t  | Json(?:(?:[GS]etValu|ValueTyp)e|2List)\n\t\t\t\t  | V(?:ec(?:Dist|Norm|Mag)|olumeDetect)\n\t\t\t\t  | W(?:a(?:nderWithin|ter)|hisper|ind)\n\t\t\t\t  | Key(?:(?:Count|s)KeyValu|2Nam)e\n\t\t\t\t  | HTTPRe(?:sponse|quest)\n\t\t\t\t  | NavigateTo\n\t\t\t\t  | XorBase64\n\t\t\t\t))\\b\n\t\t\t',
      name: 'support.function.lsl'
    },
    {
      match:
        '(?x)\n\t\t\t\t\\b(ll(?:\n\t\t\t\t\tSet(?:Inventory|Object)PermMask\n\t\t\t\t  | GodLikeRezObject\n\t\t\t\t))\\b\n\t\t\t',
      name: 'support.function.god-mode.lsl'
    },
    {
      match:
        '(?x)\n\t\t\t\t\\b(ll(?:\n\t\t\t\t\tMake(?:Explosion|Fire|Fountain|Smoke)\n\t\t\t\t  | XorBase64Strings(?:Correct)?\n\t\t\t\t  | Sound(?:Preload)?\n\t\t\t\t  | RemoteDataSetRegion\n\t\t\t\t))\\b\n\t\t\t',
      name: 'invalid.deprecated.support.function.lsl'
    },
    {
      match:
        '(?x)\n\t\t\t\t\\b(ll(?:\n\t\t\t\t\tC(?:l(?:earExperiencePermissions|oud)|ollisionSprite)\n\t\t\t\t  | Re(?:freshPrimURL|leaseCamera|moteLoadScript)\n\t\t\t\t  | S(?:etPrimURL|topPointAt)\n\t\t\t\t  | GetExperienceList\n\t\t\t\t  | TakeCamera\n\t\t\t\t  | PointAt\n\t\t\t\t))\\b\n\t\t\t',
      name: 'invalid.illegal.reserved-function.lsl'
    },
    {
      match:
        '(?x)\n\t\t\t\t\\b(\n\t\t\t\t\tP(?:R(?:IM_(?:M(?:EDIA_(?:MAX_(?:W(?:HITELIST_(?:COUNT|SIZE)|IDTH_PIXELS)|HEIGHT_PIXELS|URL_LENGTH)|P(?:ERM(?:_(?:(?:ANY|N)ONE|GROUP|OWNER)|S_(?:INTERACT|CONTROL))|ARAM_MAX)|A(?:UTO_(?:SCALE|LOOP|PLAY|ZOOM)|LT_IMAGE_ENABLE)|C(?:ONTROLS(?:_(?:STANDARD|MINI))?|URRENT_URL)|W(?:HITELIST(?:_ENABLE)?|IDTH_PIXELS)|H(?:EIGHT_PIXELS|OME_URL)|FIRST_CLICK_INTERACT)|ATERIAL(?:_(?:PLASTIC|RUBBER|FLESH|GLASS|METAL|STONE|WOOD))?)|S(?:C(?:ULPT_(?:TYPE_(?:(?:SPHER|PLAN)E|CYLINDER|TORUS|MASK)|FLAG_(?:INVERT|MIRROR))|RIPTED_SIT_ONLY)|HINY_(?:MEDIUM|HIGH|NONE|LOW)|I(?:T_TARGET|ZE)|PECULAR|LICE)|BUMP_(?:S(?:T(?:UCCO|ONE)|UCTION|IDING|HINY)|B(?:RI(?:CKS|GHT)|LOBS|ARK)|(?:(?:LARGE)?TIL|NON)E|C(?:ONCRETE|HECKER)|D(?:ISKS|ARK)|W(?:EAVE|OOD)|GRAVEL)|T(?:YPE(?:_(?:S(?:CULPT|PHERE)|T(?:ORUS|UBE)|CYLINDER|PRISM|RING|BOX))?|E(?:X(?:GEN(?:_(?:DEFAULT|PLANAR))?|T(?:URE)?)|MP_ON_REZ))|P(?:H(?:YSICS(?:_SHAPE_(?:(?:NON|TYP)E|CONVEX|PRIM))?|ANTOM)|O(?:S(?:_LOCAL|ITION)|INT_LIGHT))|AL(?:PHA_MODE(?:_(?:(?:EMISSIV|NON)E|BLEND|MASK))?|LOW_UNSIT)|HOLE_(?:(?:(?:TRIANG|CIRC)L|SQUAR)E|DEFAULT)|F(?:ULLBRIGHT|LEXIBLE)|ROT(?:_LOCAL|ATION)|N(?:ORMAL|AME)|LINK_TARGET|COLOR|OMEGA|DESC|GLOW)|OFILE_(?:SCRIPT_MEMORY|NONE))|A(?:RCEL_(?:FLAG_(?:ALLOW_(?:(?:CREATE(?:_GROUP)?_OBJEC|SCRIP)TS|GROUP_(?:OBJECT_ENTRY|SCRIPTS)|(?:ALL_OBJECT_ENTR|FL)Y|TERRAFORM|LANDMARK|DAMAGE)|USE_(?:(?:LAND_PASS|BAN)_LIST|ACCESS_(?:GROUP|LIST))|RESTRICT_PUSHOBJECT|LOCAL_SOUND_ONLY)|MEDIA_COMMAND_(?:A(?:UTO_ALIGN|GENT)|T(?:EXTUR|IM|YP)E|LOOP(?:_SET)?|P(?:AUSE|LAY)|U(?:NLOAD|RL)|S(?:IZE|TOP)|DESC)|DETAILS_(?:SEE_AVATARS|GROUP|OWNER|AREA|DESC|NAME|ID)|COUNT_(?:T(?:OTAL|EMP)|O(?:TH|WN)ER|SELECTED|GROUP))|Y(?:MENT_INFO_(?:ON_FILE|USED)|_(?:DEFAULT|HIDE))|SS(?:_(?:IF_NOT_HANDLED|ALWAYS|NEVER)|IVE)|TROL_PAUSE_AT_WAYPOINTS)|SYS_(?:PART_(?:B(?:F_(?:ONE(?:_MINUS_(?:SOURCE_(?:ALPHA|COLOR)|DEST_COLOR))?|SOURCE_(?:ALPHA|COLOR)|DEST_COLOR|ZERO)|LEND_FUNC_(?:SOURCE|DEST)|OUNCE_MASK)|(?:INTERP_(?:COLOR|SCALE)|TARGET_(?:LINEAR|POS)|RIBBON|WIND)_MASK|E(?:ND_(?:ALPHA|COLOR|SCALE|GLOW)|MISSIVE_MASK)|F(?:OLLOW_(?:VELOCITY|SRC)_MASK|LAGS)|START_(?:ALPHA|COLOR|SCALE|GLOW)|MAX_AGE)|SRC_(?:PATTERN(?:_(?:ANGLE(?:_CONE(?:_EMPTY)?)?|EXPLODE|DROP))?|BURST_(?:SPEED_M(?:AX|IN)|RA(?:DIUS|TE)|PART_COUNT)|A(?:NGLE_(?:BEGIN|END)|CCEL)|T(?:ARGET_KEY|EXTURE)|MAX_AGE|OMEGA))|U(?:_(?:FAILURE_(?:(?:(?:PARCEL_)?UNREACHABL|TARGET_GON)E|NO_(?:VALID_DESTINATION|NAVMESH)|DYNAMIC_PATHFINDING_DISABLED|INVALID_(?:START|GOAL)|OTHER)|(?:SLOWDOWN_DISTANCE|GOAL)_REACHED|EVADE_(?:SPOTTED|HIDDEN))|RSUIT_(?:(?:INTERCEP|OFFSE)T|GOAL_TOLERANCE|FUZZ_FACTOR)|BLIC_CHANNEL)|ERM(?:ISSION_(?:T(?:R(?:IGGER_ANIMATION|ACK_CAMERA)|AKE_CONTROLS|ELEPORT)|(?:OVERRIDE_ANIMATION|RETURN_OBJECT)S|(?:SILENT_ESTATE_MANAGEMEN|DEBI)T|C(?:ONTROL_CAMERA|HANGE_LINKS)|ATTACH)|_(?:MO(?:DIFY|VE)|TRANSFER|COPY|ALL))|I(?:NG_PONG|_BY_TWO)?)\n\t\t\t\t  | C(?:HA(?:RACTER_(?:A(?:CCOUNT_FOR_SKIPPED_FRAMES|VOIDANCE_MODE)|MAX_(?:(?:AC|DE)CEL|TURN_RADIUS|SPEED)|CMD_(?:(?:SMOOTH_)?STO|JUM)P|TYPE(?:_(?:[ABCD]|NONE))?|DESIRED(?:_TURN)?_SPEED|STAY_WITHIN_PARCEL|ORIENTATION|LENGTH|RADIUS)|NGED_(?:TE(?:LEPORT|XTURE)|REGION(?:_START)?|(?:COLO|OWNE)R|S(?:CAL|HAP)E|ALLOWED_DROP|INVENTORY|MEDIA|LINK))|AMERA_(?:P(?:OSITION(?:_(?:L(?:OCKED|AG)|THRESHOLD))?|ITCH)|FOCUS(?:_(?:L(?:OCKED|AG)|THRESHOLD|OFFSET))?|BEHINDNESS_(?:ANGLE|LAG)|(?:DISTANC|ACTIV)E)|ONT(?:ROL_(?:R(?:OT_(?:RIGH|LEF)|IGH)T|(?:ML_LBUTTO|DOW)N|L(?:BUTTON|EFT)|BACK|FWD|UP)|ENT_TYPE_(?:(?:X(?:HT)?|HT)ML|(?:ATO|FOR)M|JSON|LLSD|TEXT|RSS))|LICK_ACTION_(?:OPEN(?:_MEDIA)?|(?:PL?A|BU)Y|TOUCH|NONE|SIT))\n\t\t\t\t  | A(?:TTACH_(?:H(?:UD_(?:TOP_(?:(?:RIGH|LEF)T|CENTER)|BOTTOM(?:_(?:RIGH|LEF)T)?|CENTER_[12])|IND_[LR]FOOT|EAD)|R(?:H(?:AND(?:_RING1)?|IP)|L(?:ARM|LEG)|U(?:ARM|LEG)|E(?:AR|YE)|IGHT_PEC|SHOULDER|FOOT|WING)|L(?:H(?:AND(?:_RING1)?|IP)|E(?:FT_PEC|AR|YE)|L(?:ARM|LEG)|U(?:ARM|LEG)|SHOULDER|FOOT|WING)|FACE_(?:LE(?:AR|YE)|RE(?:AR|YE)|TONGUE|JAW)|TAIL_(?:BASE|TIP)|AVATAR_CENTER|B(?:ELLY|ACK)|CH(?:EST|IN)|N(?:ECK|OSE)|PELVIS|GROIN|MOUTH)|GENT(?:_(?:A(?:TTACHMENTS|LWAYS_RUN|UTOPILOT|WAY)|LIST_(?:PARCEL(?:_OWNER)?|REGION)|B(?:Y_(?:LEGACY_|USER)NAME|USY)|(?:CROUCH|WALK|FLY|TYP)ING|S(?:CRIPTED|ITTING)|MOUSELOOK|ON_OBJECT|IN_AIR))?|VOID_(?:(?:DYNAMIC_OBSTACLE|CHARACTER)S|NONE)|LL_SIDES|NIM_ON|CTIVE)\n\t\t\t\t  | O(?:BJECT_(?:R(?:E(?:TURN_(?:PARCEL(?:_OWNER)?|REGION)|NDER_WEIGHT|ZZER_KEY)|(?:UNNING_SCRIPT_COUN|O?O)T)|P(?:H(?:YSICS(?:_COST)?|ANTOM)|RIM_(?:EQUIVALENCE|COUNT)|ATHFINDING_TYPE|OS)|S(?:(?:E(?:LECT_COUN|RVER_COS)|TREAMING_COS|IT_COUN)T|CRIPT_(?:MEMORY|TIME))|T(?:OTAL_(?:INVENTORY|SCRIPT)_COUNT|EMP_(?:ATTACHED|ON_REZ))|C(?:REAT(?:ION_TIME|OR)|HARACTER_TIME|LICK_ACTION)|ATTACHED_(?:SLOTS_AVAILABLE|POINT)|(?:BODY_SHAPE_TYP|NAM)E|GROUP(?:_TAG)?|O(?:MEGA|WNER)|UNKNOWN_DETAIL|LAST_OWNER_ID|HOVER_HEIGHT|VELOCITY|DESC)|PT_(?:(?:(?:EXCLUSION|MATERIAL)_VOLUM|(?:STATIC_OBSTAC|WALKAB)L)E|(?:(?:CHARACT|OTH)E|AVATA)R|LEGACY_LINKSET))\n\t\t\t\t  | VE(?:HICLE_(?:FLAG_(?:HOVER_(?:(?:TERRAIN|WATER|UP)_ONLY|GLOBAL_HEIGHT)|LIMIT_(?:ROLL_ONLY|MOTOR_UP)|MOUSELOOK_(?:STEER|BANK)|CAMERA_DECOUPLED|NO_DEFLECTION_UP)|LINEAR_(?:MOTOR_(?:D(?:ECAY_TIMESCALE|IRECTION)|TIMESCALE|OFFSET)|DEFLECTION_(?:EFFICIENCY|TIMESCALE)|FRICTION_TIMESCALE)|ANGULAR_(?:MOTOR_(?:D(?:ECAY_TIMESCALE|IRECTION)|TIMESCALE)|DEFLECTION_(?:EFFICIENCY|TIMESCALE)|FRICTION_TIMESCALE)|TYPE_(?:(?:AIRPLA|NO)NE|B(?:ALLOON|OAT)|SLED|CAR)|B(?:ANKING_(?:EFFICIENCY|TIMESCALE|MIX)|UOYANCY)|VERTICAL_ATTRACTION_(?:EFFICIENCY|TIMESCALE)|HOVER_(?:EFFICIENCY|TIMESCALE|HEIGHT)|REFERENCE_FRAME)|RTICAL)\n\t\t\t\t  | R(?:E(?:GION_FLAG_(?:BLOCK_(?:FLY(?:OVER)?|TERRAFORM)|ALLOW_D(?:IRECT_TELEPORT|AMAGE)|DISABLE_(?:COLLISION|PHYSIC)S|RESTRICT_PUSHOBJECT|FIXED_SUN|SANDBOX)|MOTE_DATA_(?:RE(?:QUEST|PLY)|CHANNEL)|QUIRE_LINE_OF_SIGHT|STITUTION|VERSE)|C(?:_(?:REJECT_(?:(?:NON)?PHYSICAL|(?:AGENT|TYPE)S|LAND)|GET_(?:LINK_NUM|ROOT_KEY|NORMAL)|D(?:ETECT_PHANTOM|ATA_FLAGS)|MAX_HITS)|ERR_(?:CAST_TIME_EXCEEDED|SIM_PERF_LOW|UNKNOWN))|AD_TO_DEG|OTATE)\n\t\t\t\t  | S(?:T(?:ATUS_(?:(?:NOT_(?:SUPPORTE|FOUN)|WHITELIST_FAILE)D|B(?:LOCK_GRAB(?:_OBJECT)?|OUNDS_ERROR)|(?:MALFORMED_PARAM|CAST_SHADOW)S|R(?:ETURN_AT_EDGE|OTATE_[XYZ])|PH(?:ANTOM|YSICS)|INTERNAL_ERROR|TYPE_MISMATCH|DIE_AT_EDGE|SANDBOX|OK)|RING_TRIM(?:_(?:HEAD|TAIL))?)|I(?:T_(?:NO(?:_(?:EXPERIENCE_PERMISSION|SIT_TARGET|ACCESS)|T_EXPERIENCE)|INVALID_(?:(?:OBJEC|AGEN)T|LINK))|M_STAT_PCT_CHARS_STEPPED)|C(?:RIPTED|ALE)|MOOTH|QRT2)\n\t\t\t\t  | XP_ERROR_(?:(?:(?:EXPERIENCE(?:_(?:SUSPEND|DISABL)|S_DISABL)|(?:MATURITY|QUOTA)_EXCEED|THROTTL)E|KEY_NOT_FOUN)D|NO(?:T_(?:PERMITTE(?:D_LAN)?|FOUN)D|(?:_EXPERIENC|N)E)|RE(?:QUEST_PERM_TIMEOUT|TRY_UPDATE)|INVALID_(?:EXPERIENCE|PARAMETERS)|STOR(?:AGE_EXCEPTION|E_DISABLED)|UNKNOWN_ERROR)\n\t\t\t\t  | L(?:I(?:ST_STAT_(?:S(?:UM(?:_SQUARES)?|TD_DEV)|M(?:(?:E(?:DI)?A|I)N|AX)|GEOMETRIC_MEAN|NUM_COUNT|RANGE)|NK_(?:ALL_(?:CHILDREN|OTHERS)|(?:ROO|SE)T|THIS))|AND_(?:R(?:EVERT|AISE)|L(?:EVEL|OWER)|SMOOTH|NOISE)|OOP)\n\t\t\t\t  | T(?:YPE_(?:IN(?:TEGER|VALID)|ROTATION|STRING|VECTOR|FLOAT|KEY)|EXTURE_(?:(?:TRANSPAREN|DEFAUL)T|PLYWOOD|BLANK|MEDIA)|OUCH_INVALID_(?:TEXCOORD|VECTOR|FACE)|RAVERSAL_TYPE(?:_(?:FAST|NONE|SLOW))?|WO_PI)\n\t\t\t\t  | E(?:STATE_ACCESS_(?:ALLOWED_(?:AGENT_(?:REMOVE|ADD)|GROUP_(?:REMOVE|ADD))|BANNED_AGENT_(?:REMOVE|ADD))|RR_(?:(?:(?:RUNTIME|PARCEL)_PERMISSION|MALFORMED_PARAM)S|THROTTLED|GENERIC)|OF)\n\t\t\t\t  | H(?:TTP_(?:VER(?:BOSE_THROTTLE|IFY_CERT)|BODY_(?:MAXLENGTH|TRUNCATED)|(?:USER_AGEN|ACCEP)T|M(?:IMETYPE|ETHOD)|PRAGMA_NO_CACHE|CUSTOM_HEADER)|ORIZONTAL)\n\t\t\t\t  | INVENTORY_(?:(?:BODYPAR|OBJEC)T|A(?:NIMATION|LL)|(?:GES|TEX)TURE|NO(?:TECARD|NE)|S(?:CRIPT|OUND)|CLOTHING|LANDMARK)\n\t\t\t\t  | KFM_(?:C(?:MD_(?:P(?:AUSE|LAY)|STOP)|OMMAND)|R(?:OTATION|EVERSE)|TRANSLATION|PING_PONG|FORWARD|DATA|LOOP|MODE)\n\t\t\t\t  | D(?:ATA_(?:SIM_(?:(?:STATU|PO)S|RATING)|(?:ONLIN|NAM)E|PAYINFO|BORN)|E(?:BUG_CHANNEL|G_TO_RAD|NSITY))\n\t\t\t\t  | JSON_(?:(?:DELET|FALS|TRU)E|A(?:PPEND|RRAY)|NU(?:MBER|LL)|INVALID|OBJECT|STRING)\n\t\t\t\t  | G(?:CNP_(?:RADIUS|STATIC)|RAVITY_MULTIPLIER)\n\t\t\t\t  | MASK_(?:(?:EVERYON|BAS)E|GROUP|OWNER|NEXT)\n\t\t\t\t  | F(?:ORCE_DIRECT_PATH|RICTION)\n\t\t\t\t  | URL_REQUEST_(?:GRANT|DENI)ED\n\t\t\t\t  | WANDER_PAUSE_AT_WAYPOINTS\n\t\t\t\t  | ZERO_(?:ROTATION|VECTOR)\n\t\t\t\t  | NULL_KEY\n\t\t\t\t)\\b\n\t\t\t',
      name: 'support.constant.lsl'
    },
    {
      match:
        '(?x)\n\t\t\t\t\\b(\n\t\t\t\t\tPERMISSION_(?:CHANGE_(?:JOINT|PERMISSION)S|RE(?:MAP_CONTROLS|LEASE_OWNERSHIP))\n\t\t\t\t  | LAND_(?:SMALL|MEDIUM|LARGE)_BRUSH\n\t\t\t\t  | PRIM_(?:CAST_SHADOWS|MATERIAL_LIGHT)\n\t\t\t\t  | PSYS_SRC_(?:(?:INN|OUT)ERANGLE|OBJ_REL_MASK)\n\t\t\t\t  | ATTACH_[LR]PEC\n\t\t\t\t  | VEHICLE_FLAG_NO_FLY_UP\n\t\t\t\t  | DATA_RATING\n\t\t\t\t)\\b\n\t\t\t',
      name: 'invalid.deprecated.constant.lsl'
    },
    {
      match: '\\b[a-zA-Z_][a-zA-Z_0-9]*(?=\\s*\\()',
      name: 'entity.name.function.lsl'
    },
    {match: '\\b[a-zA-Z_][a-zA-Z_0-9]*\\b', name: 'variable.other.lsl'},
    {
      match: '\\B@[a-zA-Z_][a-zA-Z_0-9]*\\b',
      name: 'constant.other.reference.label.lsl'
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.lsl'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.lsl'}},
      name: 'string.quoted.double.lsl',
      patterns: [
        {match: '\\\\[\\\\"nt]', name: 'constant.character.escape.lsl'}
      ]
    }
  ],
  repository: {
    comments: {
      patterns: [
        {
          begin: '/\\*',
          beginCaptures: {
            0: {name: 'punctuation.definition.comment.begin.lsl'}
          },
          end: '\\*/',
          endCaptures: {0: {name: 'punctuation.definition.comment.end.lsl'}},
          name: 'comment.block.lsl'
        },
        {
          begin: '(^[ \\t]+)?(?=//)',
          beginCaptures: {
            1: {name: 'punctuation.whitespace.comment.leading.lsl'}
          },
          end: '(?!\\G)',
          patterns: [
            {
              begin: '//',
              beginCaptures: {0: {name: 'punctuation.definition.comment.lsl'}},
              end: '\\n',
              name: 'comment.line.double-slash.lsl'
            }
          ]
        }
      ]
    },
    numeric: {
      patterns: [
        {
          match: '\\b0(x|X)[0-9a-fA-F]+\\b',
          name: 'constant.numeric.integer.hexadecimal.lsl'
        },
        {
          match: '\\b[0-9]+([Ee][-+]?[0-9]+)\\b',
          name: 'constant.numeric.float.lsl'
        },
        {
          match:
            '\\b([0-9]+\\.[0-9]*|[0-9]*\\.[0-9]+)([Ee][-+]?[0-9]+)?[fF]?\\b',
          name: 'constant.numeric.float.lsl'
        },
        {match: '\\b[0-9]+\\b', name: 'constant.numeric.integer.lsl'}
      ]
    },
    'round-brackets': {
      patterns: [
        {
          begin: '\\{',
          beginCaptures: {0: {name: 'punctuation.section.scope.begin.lsl'}},
          end: '\\}',
          endCaptures: {0: {name: 'punctuation.section.scope.end.lsl'}},
          name: 'meta.block.lsl',
          patterns: [{include: '$base'}]
        },
        {
          begin: '\\(',
          beginCaptures: {0: {name: 'punctuation.section.group.begin.lsl'}},
          end: '\\)',
          endCaptures: {0: {name: 'punctuation.section.group.end.lsl'}},
          name: 'meta.group.parenthesis.lsl',
          patterns: [{include: '$base'}]
        },
        {
          begin: '\\[',
          beginCaptures: {0: {name: 'punctuation.section.array.begin.lsl'}},
          end: '\\]',
          endCaptures: {0: {name: 'punctuation.section.array.end.lsl'}},
          name: 'meta.array.lsl',
          patterns: [{include: '$base'}]
        }
      ]
    }
  },
  scopeName: 'source.lsl'
}

export default grammar
