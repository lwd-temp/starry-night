// This is a TextMate grammar distributed by `starry-night`.
// This grammar is licensed `apache-2.0`.
// See <https://github.com/wooorm/starry-night> for more info.
/**
 * @import {Grammar} from '@wooorm/starry-night'
 */

/** @type {Grammar} */
const grammar = {
  extensions: ['.nsi', '.nsh'],
  names: ['nsis'],
  patterns: [
    {
      match:
        '(\\b|^\\s*)\\!(include|addincludedir|addplugindir|appendfile|cd|delfile|echo|error|execute|packhdr|finalize|getdllversion|system|tempfile|warning|verbose|define|undef|insertmacro|macro|macroend|makensis|searchparse|searchreplace)\\b',
      name: 'keyword.compiler.nsis'
    },
    {
      match:
        '(\\b|^\\s*)(Abort|AddBrandingImage|AddSize|AllowRootDirInstall|AllowSkipFiles|AutoCloseWindow|BGFont|BGGradient|BrandingText|BringToFront|Call|CallInstDLL|Caption|ChangeUI|CheckBitmap|ClearErrors|CompletedText|ComponentText|CopyFiles|CRCCheck|CreateDirectory|CreateFont|CreateShortCut|Delete|DeleteINISec|DeleteINIStr|DeleteRegKey|DeleteRegValue|DetailPrint|DetailsButtonText|DirText|DirVar|DirVerify|EnableWindow|EnumRegKey|EnumRegValue|Exch|Exec|ExecShell|ExecWait|ExpandEnvStrings|File|FileBufSize|FileClose|FileErrorText|FileOpen|FileRead|FileReadByte|FileReadUTF16LE|FileReadWord|FileWriteUTF16LE|FileSeek|FileWrite|FileWriteByte|FileWriteWord|FindClose|FindFirst|FindNext|FindWindow|FlushINI|GetCurInstType|GetCurrentAddress|GetDlgItem|GetDLLVersion|GetDLLVersionLocal|GetErrorLevel|GetFileTime|GetFileTimeLocal|GetFullPathName|GetFunctionAddress|GetInstDirError|GetLabelAddress|GetTempFileName|Goto|HideWindow|Icon|IfAbort|IfErrors|IfFileExists|IfRebootFlag|IfSilent|InitPluginsDir|InstallButtonText|InstallColors|InstallDir|InstallDirRegKey|InstProgressFlags|InstType|InstTypeGetText|InstTypeSetText|IntCmp|IntCmpU|IntFmt|IntOp|IsWindow|LangString|LicenseBkColor|LicenseData|LicenseForceSelection|LicenseLangString|LicenseText|LoadLanguageFile|LockWindow|LogSet|LogText|ManifestDPIAware|ManifestSupportedOS|MessageBox|MiscButtonText|Name|Nop|OutFile|Page|PageCallbacks|Pop|Push|Quit|ReadEnvStr|ReadINIStr|ReadRegDWORD|ReadRegStr|Reboot|RegDLL|Rename|RequestExecutionLevel|ReserveFile|Return|RMDir|SearchPath|SectionGetFlags|SectionGetInstTypes|SectionGetSize|SectionGetText|SectionIn|SectionSetFlags|SectionSetInstTypes|SectionSetSize|SectionSetText|SendMessage|SetAutoClose|SetBrandingImage|SetCompress|SetCompressor|SetCompressorDictSize|SetCtlColors|SetCurInstType|SetDatablockOptimize|SetDateSave|SetDetailsPrint|SetDetailsView|SetErrorLevel|SetErrors|SetFileAttributes|SetFont|SetOutPath|SetOverwrite|SetPluginUnload|SetRebootFlag|SetRegView|SetShellVarContext|SetSilent|ShowInstDetails|ShowUninstDetails|ShowWindow|SilentInstall|SilentUnInstall|Sleep|SpaceTexts|StrCmp|StrCmpS|StrCpy|StrLen|SubCaption|Unicode|UninstallButtonText|UninstallCaption|UninstallIcon|UninstallSubCaption|UninstallText|UninstPage|UnRegDLL|Var|VIAddVersionKey|VIFileVersion|VIProductVersion|WindowIcon|WriteINIStr|WriteRegBin|WriteRegDWORD|WriteRegExpandStr|WriteRegStr|WriteUninstaller|XPStyle)\\b',
      name: 'keyword.command.nsis'
    },
    {
      match:
        '(\\b|^\\s*)\\!(ifdef|ifndef|if|ifmacrodef|ifmacrondef|else|endif)\\b',
      name: 'keyword.control.nsis'
    },
    {match: '(\\b|^\\s*)(?i)\\w+\\:\\:\\w+', name: 'keyword.plugin.nsis'},
    {match: '[!<>]?=|<>|<|>', name: 'keyword.operator.comparison.nsis'},
    {
      match:
        '(\\b|^\\s*)(Function|FunctionEnd|Section|SectionEnd|SectionGroup|SectionGroupEnd|SubSection|SubSectionEnd|PageEx|PageExEnd)\\b',
      name: 'support.function.nsis'
    },
    {
      match:
        '(\\b|^\\s*)(?i)(ARCHIVE|FILE_ATTRIBUTE_ARCHIVE|FILE_ATTRIBUTE_HIDDEN|FILE_ATTRIBUTE_NORMAL|FILE_ATTRIBUTE_OFFLINE|FILE_ATTRIBUTE_READONLY|FILE_ATTRIBUTE_SYSTEM|FILE_ATTRIBUTE_TEMPORARY|HIDDEN|HKCC|HKCR|HKCU|HKDD|HKEY_CLASSES_ROOT|HKEY_CURRENT_CONFIG|HKEY_CURRENT_USER|HKEY_DYN_DATA|HKEY_LOCAL_MACHINE|HKEY_PERFORMANCE_DATA|HKEY_USERS|HKLM|HKPD|HKU|IDABORT|IDCANCEL|IDD_DIR|IDD_INST|IDD_INSTFILES|IDD_LICENSE|IDD_SELCOM|IDD_UNINST|IDD_VERIFY|IDIGNORE|IDNO|IDOK|IDRETRY|IDYES|MB_ABORTRETRYIGNORE|MB_DEFBUTTON1|MB_DEFBUTTON2|MB_DEFBUTTON3|MB_DEFBUTTON4|MB_ICONEXCLAMATION|MB_ICONINFORMATION|MB_ICONQUESTION|MB_ICONSTOP|MB_OK|MB_OKCANCEL|MB_RETRYCANCEL|MB_RIGHT|MB_RTLREADING|MB_SETFOREGROUND|MB_TOPMOST|MB_USERICON|MB_YESNO|MB_YESNOCANCEL|NORMAL|OFFLINE|READONLY|SHCTX|SHELL_CONTEXT|SW_HIDE|SW_SHOWDEFAULT|SW_SHOWMAXIMIZED|SW_SHOWMINIMIZED|SW_SHOWNORMAL|SYSTEM|TEMPORARY)\\b',
      name: 'support.constant.nsis'
    },
    {match: '\\b(true|on)\\b', name: 'constant.language.boolean.true.nsis'},
    {match: '\\b(false|off)\\b', name: 'constant.language.boolean.false.nsis'},
    {
      match:
        '(\\b|^\\s*)(?i)((un\\.)?components|(un\\.)?custom|(un\\.)?directory|(un\\.)?instfiles|(un\\.)?license|uninstConfirm|admin|all|auto|both|bottom|bzip2|current|force|hide|highest|ifdiff|ifnewer|lastused|leave|left|listonly|lzma|nevershow|none|normal|notset|right|show|silent|silentlog|textonly|top|try|user|Win10|Win7|Win8|WinVista|zlib)\\b',
      name: 'constant.language.option.nsis'
    },
    {
      match:
        '\\/(?i)(a|BRANDING|CENTER|COMPONENTSONLYONCUSTOM|CUSTOMSTRING\\=|date|e|ENABLECANCEL|FILESONLY|file|FINAL|GLOBAL|gray|ifempty|ifndef|ignorecase|IMGID\\=|ITALIC|LANG\\=|NOCUSTOM|noerrors|NONFATAL|nonfatal|oname\\=|o|REBOOTOK|redef|RESIZETOFIT|r|SHORT|SILENT|SOLID|STRIKE|TRIM|UNDERLINE|utcdate|windows|x)\\b',
      name: 'constant.language.slash-option.nsis'
    },
    {
      match: '\\b((0(x|X)[0-9a-fA-F]+)|([0-9]+(\\.[0-9]+)?))\\b',
      name: 'constant.numeric.nsis'
    },
    {match: '\\${[\\w]+}', name: 'entity.name.function.nsis'},
    {match: '\\$[\\w]+', name: 'storage.type.function.nsis'},
    {
      begin: '`',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nsis'}},
      end: '`',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nsis'}},
      name: 'string.quoted.back.nsis',
      patterns: [{match: '\\$\\\\.', name: 'constant.character.escape.nsis'}]
    },
    {
      begin: '"',
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nsis'}},
      end: '"',
      endCaptures: {0: {name: 'punctuation.definition.string.end.nsis'}},
      name: 'string.quoted.double.nsis',
      patterns: [{match: '\\$\\\\.', name: 'constant.character.escape.nsis'}]
    },
    {
      begin: "'",
      beginCaptures: {0: {name: 'punctuation.definition.string.begin.nsis'}},
      end: "'",
      endCaptures: {0: {name: 'punctuation.definition.string.end.nsis'}},
      name: 'string.quoted.single.nsis',
      patterns: [{match: '\\$\\\\.', name: 'constant.character.escape.nsis'}]
    },
    {
      captures: {1: {name: 'punctuation.definition.comment.nsis'}},
      match: '(;|#).*$\\n?',
      name: 'comment.line.nsis'
    },
    {
      begin: '/\\*',
      captures: {0: {name: 'punctuation.definition.comment.nsis'}},
      end: '\\*/',
      name: 'comment.block.nsis'
    },
    {
      captures: {match: {name: 'keyword.control.import.nsis'}},
      match: '(\\!include|\\!insertmacro)\\b'
    }
  ],
  scopeName: 'source.nsis'
}

export default grammar
