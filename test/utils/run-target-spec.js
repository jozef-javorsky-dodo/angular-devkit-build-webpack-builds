"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const architect_1 = require("@angular-devkit/architect");
const core_1 = require("@angular-devkit/core");
const operators_1 = require("rxjs/operators");
const utils_1 = require("../utils");
const default_workspaces_1 = require("./default-workspaces");
function runTargetSpec(host, targets, overrides = {}, logger = new core_1.logging.NullLogger()) {
    if (!Array.isArray(targets)) {
        targets = [targets];
    }
    const targetName = targets[targets.length - 1].builder;
    const targetSpec = { project: 'app', target: targetName, overrides };
    const workspace = new core_1.experimental.workspace.Workspace(utils_1.workspaceRoot, host);
    let architect;
    return workspace.loadWorkspaceFromJson(default_workspaces_1.makeWorkspace(targets)).pipe(operators_1.concatMap(ws => new architect_1.Architect(ws).loadArchitect()), operators_1.tap(arch => architect = arch), operators_1.concatMap(() => architect.getBuilderConfiguration(targetSpec)), operators_1.concatMap(cfg => architect.run(cfg, { logger })));
}
exports.runTargetSpec = runTargetSpec;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLXRhcmdldC1zcGVjLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9idWlsZF93ZWJwYWNrL3Rlc3QvdXRpbHMvcnVuLXRhcmdldC1zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7O0FBRUgseURBQTBFO0FBQzFFLCtDQUE2RDtBQUU3RCw4Q0FBZ0Q7QUFDaEQsb0NBQTBEO0FBQzFELDZEQUFxRDtBQUdyRCx1QkFDRSxJQUFxQixFQUNyQixPQUFrQyxFQUNsQyxTQUFTLEdBQUcsRUFBRSxFQUNkLFNBQXlCLElBQUksY0FBTyxDQUFDLFVBQVUsRUFBRTtJQUVqRCxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFFRCxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDdkQsTUFBTSxVQUFVLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDckUsTUFBTSxTQUFTLEdBQUcsSUFBSSxtQkFBWSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMscUJBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RSxJQUFJLFNBQW9CLENBQUM7SUFFekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxrQ0FBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNqRSxxQkFBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxxQkFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLEVBQ2xELGVBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsRUFDN0IscUJBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsVUFBVSxDQUFDLENBQUMsRUFDOUQscUJBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUNqRCxDQUFDO0FBQ0osQ0FBQztBQXJCRCxzQ0FxQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7IEFyY2hpdGVjdCwgQnVpbGRFdmVudCwgVGFyZ2V0IH0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2FyY2hpdGVjdCc7XG5pbXBvcnQgeyBleHBlcmltZW50YWwsIGxvZ2dpbmcgfSBmcm9tICdAYW5ndWxhci1kZXZraXQvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IGNvbmNhdE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGVzdFByb2plY3RIb3N0LCB3b3Jrc3BhY2VSb290IH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgbWFrZVdvcmtzcGFjZSB9IGZyb20gJy4vZGVmYXVsdC13b3Jrc3BhY2VzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gcnVuVGFyZ2V0U3BlYyhcbiAgaG9zdDogVGVzdFByb2plY3RIb3N0LFxuICB0YXJnZXRzOiBUYXJnZXQ8e30+IHwgVGFyZ2V0PHt9PltdLFxuICBvdmVycmlkZXMgPSB7fSxcbiAgbG9nZ2VyOiBsb2dnaW5nLkxvZ2dlciA9IG5ldyBsb2dnaW5nLk51bGxMb2dnZXIoKSxcbik6IE9ic2VydmFibGU8QnVpbGRFdmVudD4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkodGFyZ2V0cykpIHtcbiAgICB0YXJnZXRzID0gW3RhcmdldHNdO1xuICB9XG5cbiAgY29uc3QgdGFyZ2V0TmFtZSA9IHRhcmdldHNbdGFyZ2V0cy5sZW5ndGggLSAxXS5idWlsZGVyO1xuICBjb25zdCB0YXJnZXRTcGVjID0geyBwcm9qZWN0OiAnYXBwJywgdGFyZ2V0OiB0YXJnZXROYW1lLCBvdmVycmlkZXMgfTtcbiAgY29uc3Qgd29ya3NwYWNlID0gbmV3IGV4cGVyaW1lbnRhbC53b3Jrc3BhY2UuV29ya3NwYWNlKHdvcmtzcGFjZVJvb3QsIGhvc3QpO1xuICBsZXQgYXJjaGl0ZWN0OiBBcmNoaXRlY3Q7XG5cbiAgcmV0dXJuIHdvcmtzcGFjZS5sb2FkV29ya3NwYWNlRnJvbUpzb24obWFrZVdvcmtzcGFjZSh0YXJnZXRzKSkucGlwZShcbiAgICBjb25jYXRNYXAod3MgPT4gbmV3IEFyY2hpdGVjdCh3cykubG9hZEFyY2hpdGVjdCgpKSxcbiAgICB0YXAoYXJjaCA9PiBhcmNoaXRlY3QgPSBhcmNoKSxcbiAgICBjb25jYXRNYXAoKCkgPT4gYXJjaGl0ZWN0LmdldEJ1aWxkZXJDb25maWd1cmF0aW9uKHRhcmdldFNwZWMpKSxcbiAgICBjb25jYXRNYXAoY2ZnID0+IGFyY2hpdGVjdC5ydW4oY2ZnLCB7IGxvZ2dlciB9KSksXG4gICk7XG59XG4iXX0=