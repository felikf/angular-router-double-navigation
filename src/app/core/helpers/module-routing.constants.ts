export class ModuleRoutingConstants {

    public static APPLICATIONS = 'applications';
    public static APPLICATIONS_ROUTER = [ModuleRoutingConstants.APPLICATIONS];

    public static WHITELIST = 'whitelist';
    public static WHITELIST_CONTRACT = ':contractID';
    public static WHITELIST_CONTRACT_FULL = ModuleRoutingConstants.WHITELIST + '/' + ModuleRoutingConstants.WHITELIST_CONTRACT;
    public static WHITELIST_ROUTER = [ModuleRoutingConstants.WHITELIST];

}
